package server

import (
	"encoding/json"

	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
)

func ListVisitor(ctx *middleware.AppCtx) {
	visitors, err := ctx.Providers.VisitorService.List()
	if err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	api_visitors := make([]map[string]interface{}, len(visitors))
	for i, visitor := range visitors {
		api_visitors[i] = visitor.ToApi()
	}

	middleware.SetResponse[any](ctx, api_visitors, "Successfully retrieved the visitors")
}

type SetVisitorRequest struct {
	VisitorType string `json:"visitorType"`
}

func SetVisitorType(ctx *middleware.AppCtx) {
	body := ctx.Request.Body()
	var req SetVisitorRequest
	if err := json.Unmarshal(body, &req); err != nil {
		middleware.SetErrorResponse(ctx, apperror.NewError(apperror.InvalidArguments, "Field 'visitorType' is required"))
		return
	}

	if err := ctx.Providers.VisitorService.SetVisitorType(ctx.ClientIP, visitor.VisitorType(req.VisitorType)); err != nil {
		middleware.SetErrorResponse(ctx, apperror.NewError(apperror.Internal, "Failed to set visitor type"))
		return
	}

	middleware.SetResponse[any](ctx, nil, "Successly set the visitor type!")
}
