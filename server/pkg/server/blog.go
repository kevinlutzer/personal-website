package server

import (
	"encoding/json"
	"io"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
)

type getBlogRequest struct {
	ID string `json:"id"`
}

func (s *getBlogRequest) Validate() error {
	if s.ID == "" {
		return apperror.NewError(apperror.InvalidArguments, "Field 'id' is required")
	}

	return nil
}

func (s *server) getBlog(ctx *gin.Context) {
	body, err := io.ReadAll(ctx.Request.Body)
	if err != nil {
		err := apperror.NewError(apperror.InvalidArguments, "Request body is not valid json")
		s.setErrorResponse(ctx, err)
		return
	}

	req := getBlogRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	// Validate request
	if err := req.Validate(); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	blog, err := s.blogService.Get(req.ID)
	if err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	api_blog := blog.ToApi()
	s.setResponse(ctx, api_blog, "Successfully retrieved the visitors")
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

func (s *replaceBlogRequest) Validate() error {
	if s.ID == "" {
		return apperror.NewError(apperror.InvalidArguments, "Field 'id' is required")
	}

	if len(s.FieldMask) == 0 {
		return apperror.NewError(apperror.InvalidArguments, "Field 'fieldMask' must have at least one element")
	}

	return nil
}

func (s *server) replaceBlog(ctx *gin.Context) {

	body := ctx.Request.Body
	b, err := io.ReadAll(body)
	if err != nil {
		s.setErrorResponse(ctx, apperror.NewError(apperror.InvalidArguments, "Request body is not valid json"))
		return
	}

	req := replaceBlogRequest{}
	if err := json.Unmarshal(b, &req); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	// Validate request
	if err := req.Validate(); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	if err := s.blogService.Replace(req.ID, req.FieldMask, req.Data.Title, req.Data.Description, req.Data.URL, req.Data.ThumbnailURL, req.Data.Deleted, req.Data.Tags, req.Data.Published); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	s.setResponse(ctx, nil, "Successfully replaced blog")
}

type listBlogRequest struct {
	PageSize int `json:"pageSize"`
	Cursor   int `json:"cursor"`
}

func (req *listBlogRequest) Normalize() {
	// Normalize page size and cursor
	if req.PageSize == 0 {
		req.PageSize = 1000
	}

	if req.Cursor == 0 {
		req.Cursor = 0
	}
}

func (s *server) listBlog(ctx *gin.Context) {
	body, err := io.ReadAll(ctx.Request.Body)
	if err != nil {
		err := apperror.NewError(apperror.InvalidArguments, "Request body is not valid json")
		s.setErrorResponse(ctx, err)
		return
	}

	req := listBlogRequest{}
	if err := json.Unmarshal(body, &req); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}
	req.Normalize()

	blogs, err := s.blogService.List(req.Cursor, req.PageSize)
	if err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	api_blogs := make([]map[string]interface{}, len(blogs))
	for i, blog := range blogs {
		api_blogs[i] = blog.ToApi()
	}

	s.setResponse(ctx, api_blogs, "Successfully retrieved the blogs")
}
