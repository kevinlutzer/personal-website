package server

import (
	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/blog"
	"github.com/kevinlutzer/personal-website/server/pkg/healthcheck"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
	"go.uber.org/zap"
)

type server struct {
	visitorService     visitor.Service
	healthCheckService healthcheck.Service
	blogService        blog.Service
	logger             *zap.Logger
	g                  *gin.Engine
}

type Server interface {
	Run(port string) error
}

func (s *server) Run(port string) error {
	return s.g.Run(port)
}

func NewServer(staticDir string, logger *zap.Logger, healthCheckService healthcheck.Service, blogService blog.Service, visitorService visitor.Service) Server {
	g := gin.Default()

	s := &server{
		visitorService:     visitorService,
		healthCheckService: healthCheckService,
		blogService:        blogService,
		logger:             logger,
		g:                  g,
	}

	// // g.Use(static.Serve("/", static.LocalFile(staticDir, true)))

	// // handles PWA paths
	// pathRewriteFunc := func(ctx *fasthttp.RequestCtx) []byte {
	// 	logger.Sugar().Infof("Path: %s\n", ctx.Path())
	// 	if string(ctx.Path()) == "/overview" || string(ctx.Path()) == "/projects" || strings.HasPrefix(string(ctx.Path()), "/blogs") {
	// 		return []byte("/index.html")
	// 	} else {
	// 		return ctx.Path()
	// 	}
	// }

	// dirAbs, _ := filepath.Abs(dir)

	// fs := &fasthttp.FS{
	// 	Root:               dirAbs,
	// 	IndexNames:         []string{"index.html"},
	// 	GenerateIndexPages: true,
	// 	Compress:           false,
	// 	AcceptByteRange:    false,
	// 	PathRewrite:        pathRewriteFunc,
	// }

	// fsHandler := fs.NewRequestHandler()

	// wrappedFsHandler := func(ctx *fasthttp.RequestCtx) {
	// 	if strings.HasSuffix(string(ctx.Request.URI().Path()), ".js") || strings.HasSuffix(string(ctx.Request.URI().Path()), ".js.map") {
	// 		ctx.Response.Header.Set("Content-Type", "text/javascript")
	// 	}
	// 	fmt.Println("Path: ", ctx.Request.URI().Path())
	// 	fsHandler(ctx)
	// }

	// // Angular Routes
	// r.GET("/overview", wrappedFsHandler)
	// r.GET("/projects", wrappedFsHandler)
	// r.GET("/blogs", wrappedFsHandler)
	// r.GET("/blogs/{filepath:*}", wrappedFsHandler)
	// r.GET("/index.html", wrappedFsHandler)

	// Static Specific Files
	// r.GET("/", wrappedFsHandler)
	// r.GET("/assets/{filepath:*}", wrappedFsHandler)
	// r.GET("/{filepath:^(vendor|main|polyfills|runtime|styles)\\.[0-9A-Z-a-z]{16}\\.(css|js|js\\.map)$}", wrappedFsHandler)

	g.Use(s.headerMiddleWare)

	// Healthcheck APIs
	healthcheckGroup := g.Group("/v1/healthcheck")
	healthcheckGroup.Use(s.healthCheckHeader)
	healthcheckGroup.POST("/", s.healthCheck)

	// Visitor APIs
	visitorGroup := g.Group("/v1/visitor")
	visitorGroup.Use(s.visitorIPMiddleWare)
	visitorGroup.POST("/list", s.listVisitor)
	visitorGroup.POST("/setvisitortype", s.setVisitorType)

	// Blog APIs
	blogGroup := g.Group("/v1/blog")
	blogGroup.POST("/get", s.getBlog)
	blogGroup.POST("/list", s.listBlog)

	return s
}
