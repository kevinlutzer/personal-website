package server

import (
	"encoding/json"
	"io"

	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
)

func (s *server) listVisitor(ctx *gin.Context) {
	visitors, err := s.visitorService.List()
	if err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	api_visitors := make([]map[string]interface{}, len(visitors))
	for i, visitor := range visitors {
		api_visitors[i] = visitor.ToApi()
	}

	s.setResponse(ctx, api_visitors, "Successfully retrieved the visitors")
}

type setVisitorRequest struct {
	VisitorType string `json:"visitorType"`
}

func (req *setVisitorRequest) Validate() error {
	if req.VisitorType == "" {
		return apperror.NewError(apperror.InvalidArguments, "Field 'visitorType' is required")
	}

	return nil
}

func (s *server) setVisitorType(ctx *gin.Context) {
	body := ctx.Request.Body

	b, err := io.ReadAll(body)
	if err != nil {
		s.setErrorResponse(ctx, apperror.NewError(apperror.Internal, "Request body is not valid json"))
		return
	}

	req := &setVisitorRequest{}
	if err := json.Unmarshal(b, &req); err != nil {
		s.setErrorResponse(ctx, apperror.NewError(apperror.InvalidArguments, "Field 'visitorType' is required"))
		return
	}

	// Validate request
	if err := req.Validate(); err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	clientIP, _ := ctx.Get("Client-IP")
	if err := s.visitorService.SetVisitorType(clientIP.(string), visitor.VisitorType(req.VisitorType)); err != nil {
		s.setErrorResponse(ctx, apperror.NewError(apperror.Internal, "Failed to set visitor type"))
		return
	}

	s.setResponse(ctx, nil, "Successly set the visitor type!")
}
