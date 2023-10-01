package server

import (
	"encoding/json"
	"time"

	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
)

type getBlogRequest struct {
	ID string `json:"id"`
}

func GetBlog(ctx *middleware.AppCtx) {
	body := ctx.Request.Body()
	req := getBlogRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	// ID is required
	if req.ID == "" {
		err := apperror.NewError(apperror.InvalidArguments, "Field 'id' is required")
		middleware.SetErrorResponse(ctx, err)
		return
	}

	blog, err := ctx.Providers.BlogService.Get(req.ID)
	if err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	api_blog := blog.ToApi()
	middleware.SetResponse[any](ctx, api_blog, "Successfully retrieved the visitors")
}

type replaceBlogData struct {
	Title        string    `json:"title"`
	Description  string    `json:"description"`
	URL          string    `json:"url"`
	ThumbnailURL string    `json:"thumbnailUrl"`
	Deleted      bool      `json:"deleted:false"`
	Tags         []string  `json:"tags"`
	Published    time.Time `json:"published:null"`
}

type replaceBlogRequest struct {
	ID        string          `json:"id"`
	Data      replaceBlogData `json:"data"`
	FieldMask []string        `json:"fieldMask"`
}

func ReplaceBlog(ctx *middleware.AppCtx) {
	body := ctx.Request.Body()
	req := replaceBlogRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	// ID is required and FieldMask must have elements
	if req.ID == "" || len(req.FieldMask) == 0 {
		err := apperror.NewError(apperror.InvalidArguments, "Field 'id' is required and the length of fieldMask must be greater than 1")
		middleware.SetErrorResponse(ctx, err)
		return
	}

	err := ctx.Providers.BlogService.Replace(req.ID, req.FieldMask, req.Data.Title, req.Data.Description, req.Data.URL, req.Data.ThumbnailURL, req.Data.Deleted, req.Data.Tags, req.Data.Published)
	if err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	middleware.SetResponse[any](ctx, nil, "Successfully replaced blog")
}

type listBlogRequest struct {
	PageSize int `json:"pageSize"`
	Cursor   int `json:"cursor"`
}

func ListBlog(ctx *middleware.AppCtx) {
	body := ctx.Request.Body()
	req := listBlogRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	// Normalize page size and cursor
	if req.PageSize == 0 {
		req.PageSize = 1000
	}

	if req.Cursor == 0 {
		req.Cursor = 0
	}

	blogs, err := ctx.Providers.BlogService.List(req.Cursor, req.PageSize)
	if err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	api_blogs := make([]map[string]interface{}, len(blogs))
	for i, blog := range blogs {
		api_blogs[i] = blog.ToApi()
	}

	middleware.SetResponse[any](ctx, api_blogs, "Successfully retrieved the blogs")
}
