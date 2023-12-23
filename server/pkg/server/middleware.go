package server

import (
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
)

func (s *server) headerMiddleWare(ctx *gin.Context) {
	ctx.Header("Access-Control-Allow-Origin", "kevinlutzer.ca,www.kevinlutzer.ca,www.kevin.lutzer.ca,kevin.lutzer.ca")
	ctx.Header("Access-Control-Allow-Headers", "origin,content-type,accept")
	ctx.Header("Access-Control-Allow-Credentials", "true")
	ctx.Header("Content-Type", "application/json;charset=utf-8")

	ctx.Next()
}

func (s *server) visitorIPMiddleWare(ctx *gin.Context) {

	// prioritize the Do-Connecting-Ip header set by Digital Ocean
	ipHeaders := []string{"Do-Connecting-Ip", "X-REAL-IP", "X-Real-Ip", "x-real-ip", "X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
	var ip string
	for _, ipHeader := range ipHeaders {
		ipBytes := ctx.Request.Header.Get(ipHeader)
		ip = string(ipBytes[:])

		// check and see if the header value is a comma separated list of IPs
		if ip != "" {
			split := strings.Split(ip, ",")
			if len(split) > 1 {
				// This will give us the IPv6 address if it exists
				ip = split[0]
			}
		}
	}

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

func (s *server) healthCheckHeader(ctx *gin.Context) {
	ctx.Header("Cache-Control", "no-cache, no-store, must-revalidate")
	ctx.Next()
}
