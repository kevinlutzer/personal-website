package server

import (
	"github.com/fasthttp/router"
	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
	"go.uber.org/zap"
)

type server struct {
	visitorService visitor.Service
}

type Server interface {
	HealthCheck(ctx *middleware.AppCtx)

	// Visitor APIs
	ListVisitor(ctx *middleware.AppCtx)
	SetVisitorResponse(ctx *middleware.AppCtx)
}

func SetupRoutes(r *router.Router, logger *zap.Logger, visitorService visitor.Service) {
	providers := middleware.NewProviders(visitorService)

	// Healthcheck APIs
	healthcheckMiddleware := middleware.NewBridgeBuilder().
		Logger(logger).
		Start(middleware.NewHeadersMiddleWare()).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Providers(providers).
		Build()

	r.POST("/v1/healthcheck", healthcheckMiddleware(HealthCheck))

	// Visitor APIs
	visitorMiddleware := middleware.NewBridgeBuilder().
		Logger(logger).
		Start(middleware.NewHeadersMiddleWare(), middleware.NewGetIPMiddleWare()).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Providers(providers).
		Build()

	r.POST("/v1/visitor/list", visitorMiddleware(ListVisitor))
	r.POST("/v1/visitor/setvisitortype", visitorMiddleware(SetVisitorType))
}
