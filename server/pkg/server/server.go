package server

import (
	"mime"
	"os"
	"path/filepath"

	"github.com/fasthttp/router"
	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
	"github.com/valyala/fasthttp"
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
	//
	// Mime types
	//

	mime.AddExtensionType(".js", "application/javascript")
	mime.AddExtensionType(".css", "text/css")
	mime.AddExtensionType(".svg", "image/svg+xml")
	mime.AddExtensionType(".png", "image/png")
	mime.AddExtensionType(".jpg", "image/jpeg")
	mime.AddExtensionType(".ico", "image/x-icon")

	dir := os.Getenv("STATIC_DIR")
	if dir == "" {
		logger.Sugar().Fatal("Missing environment variable STATIC_DIR. Please set it to the directory containing the static files.\n")
		os.Exit(100)
	}

	// handles PWA paths
	pathRewriteFunc := func(ctx *fasthttp.RequestCtx) []byte {
		logger.Sugar().Infof("Path: %s\n", ctx.Path())
		if string(ctx.Path()) == "/overview" || string(ctx.Path()) == "/projects" {
			return []byte("/index.html")
		} else {
			return ctx.Path()
		}
	}

	dirAbs, _ := filepath.Abs(dir)

	fs := &fasthttp.FS{
		Root:               dirAbs,
		IndexNames:         []string{"index.html"},
		GenerateIndexPages: true,
		Compress:           false,
		AcceptByteRange:    false,
		PathRewrite:        pathRewriteFunc,
	}

	fsHandler := fs.NewRequestHandler()

	// Static Specific Files
	r.GET("/", fsHandler)
	r.GET("/assets/{filepath:*}", fsHandler)
	r.GET("/{filepath:^(vendor|main|polyfills|runtime|styles)\\.[0-9A-Z-a-z]{16}\\.(css|js|js\\.map)$}", fsHandler)
	r.GET("/overview", fsHandler)
	r.GET("/projects", fsHandler)
	r.GET("/index.html", fsHandler)
	r.GET("/favicon.ico", fsHandler)

	providers := middleware.NewProviders(visitorService)
	baseMiddleware := middleware.NewBridgeBuilder(logger, providers).
		Start(middleware.NewHeadersMiddleWare()).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Build()

	// Healthcheck APIs
	r.POST("/v1/healthcheck", baseMiddleware(HealthCheck))

	// Visitor APIs
	visitorMiddleware := middleware.NewBridgeBuilder(logger, providers).
		Start(middleware.NewHeadersMiddleWare(), middleware.NewRecordVisitorMiddleWare()).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Build()

	r.POST("/v1/visitor/list", visitorMiddleware(ListVisitor))
	r.POST("/v1/visitor/setvisitortype", visitorMiddleware(SetVisitorType))
}
