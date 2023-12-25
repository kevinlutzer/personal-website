package server

import (
	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
)

func (s *server) corsMiddleware(ctx *gin.Context) {
	ctx.Header("Access-Control-Allow-Origin", "kevinlutzer.ca,www.kevinlutzer.ca,www.kevin.lutzer.ca,kevin.lutzer.ca")
	ctx.Header("Access-Control-Allow-Headers", "origin,content-type,accept")
	ctx.Header("Access-Control-Allow-Credentials", "true")
}

func (s *server) visitorIPMiddleWare(ctx *gin.Context) {

	ip := ctx.ClientIP()

	// set the client ip on the context
	ctx.Set("Client-IP", ip)

	// record the visitor, if we error just swallow it
	if err := s.visitorService.Create(ip); err != nil {
		s.logger.Sugar().Errorf("Error creating visitor: %s", err)
		apperror.NewError(apperror.Internal, "Error creating visitor")
		s.setErrorResponse(ctx, err)
	}

	ctx.Next()
}

func (s *server) staticHeaderMiddleware(ctx *gin.Context) {
	ctx.Header("Cache-Control", "max-age=86400")
	ctx.Next()
}

func (s *server) healthCheckHeader(ctx *gin.Context) {
	ctx.Header("Cache-Control", "no-cache, no-store, must-revalidate")
	ctx.Next()
}

func (s *server) rateLimitMiddleware(ctx *gin.Context) {
	// Take is a blocking function and is used to meet the RPS.
	s.limitter.Take()
	ctx.Next()
}
