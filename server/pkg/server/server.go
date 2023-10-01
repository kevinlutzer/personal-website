package server

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/fasthttp/router"
	"github.com/kevinlutzer/personal-website/server/pkg/blog"
	"github.com/kevinlutzer/personal-website/server/pkg/healthcheck"
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

func SetupRoutes(r *router.Router, logger *zap.Logger, healthCheckService healthcheck.Service, blogService blog.Service, visitorService visitor.Service) {
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

	wrappedFsHandler := func(ctx *fasthttp.RequestCtx) {
		if strings.HasSuffix(string(ctx.Request.URI().Path()), ".js") || strings.HasSuffix(string(ctx.Request.URI().Path()), ".js.map") {
			ctx.Response.Header.Set("Content-Type", "text/javascript")
		}
		fmt.Println("Path: ", ctx.Request.URI().Path())
		fsHandler(ctx)
	}

	// Static Specific Files
	r.GET("/", wrappedFsHandler)
	r.GET("/assets/{filepath:*}", wrappedFsHandler)
	r.GET("/{filepath:^(vendor|main|polyfills|runtime|styles)\\.[0-9A-Z-a-z]{16}\\.(css|js|js\\.map)$}", wrappedFsHandler)

	// Angular Routes
	r.GET("/overview", wrappedFsHandler)
	r.GET("/projects", wrappedFsHandler)
	r.GET("/blog", wrappedFsHandler)
	r.GET("/index.html", wrappedFsHandler)

	providers := middleware.NewProviders(visitorService, blogService, healthCheckService)

	healtcheckHeaders := make(map[string]string)
	healtcheckHeaders["Cache-Control"] = "no-cache, no-store, must-revalidate"

	healthcheckMiddleware := middleware.NewBridgeBuilder(logger, providers).
		Start(middleware.NewHeadersMiddleWare(healtcheckHeaders)).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Build()

	// Healthcheck APIs
	r.POST("/v1/healthcheck", healthcheckMiddleware(HealthCheck))

	// Visitor APIs
	visitorMiddleware := middleware.NewBridgeBuilder(logger, providers).
		Start(middleware.NewHeadersMiddleWare(map[string]string{}), middleware.NewRecordVisitorMiddleWare()).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Build()

	r.POST("/v1/visitor/list", visitorMiddleware(ListVisitor))
	r.POST("/v1/visitor/setvisitortype", visitorMiddleware(SetVisitorType))

	blogMiddleware := middleware.NewBridgeBuilder(logger, providers).
		Start(middleware.NewHeadersMiddleWare(map[string]string{})).
		Finish(middleware.NewAnalyticsMiddleWare()).
		Build()

	// Blog APIs
	r.POST("/v1/blog/get", blogMiddleware(GetBlog))
	r.POST("/v1/blog/replace", blogMiddleware(ReplaceBlog))
	r.POST("/v1/blog/list", blogMiddleware(ListBlog))
}
