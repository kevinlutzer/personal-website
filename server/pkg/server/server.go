package server

import (
	"time"

	ginzap "github.com/gin-contrib/zap"
	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/blog"
	"github.com/kevinlutzer/personal-website/server/pkg/healthcheck"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
	"go.uber.org/zap"
	"golang.org/x/time/rate"
)

type server struct {
	visitorService     visitor.Service
	healthCheckService healthcheck.Service
	blogService        blog.Service
	limitter           *rate.Limiter

	logger *zap.Logger
	g      *gin.Engine

	staticDir  string
	appVersion string
}

type Server interface {
	Run(port string) error
}

func (s *server) Run(port string) error {
	return s.g.Run(port)
}

func NewServer(staticDir string, appVersion string, rateLimit int, burst int, logger *zap.Logger, healthCheckService healthcheck.Service, blogService blog.Service, visitorService visitor.Service) Server {
	g := gin.New()

	// If there is no version variable set, default to 1.0.0
	if appVersion == "" {
		appVersion = "1.0.0"
	}

	// Create a new server isntace
	s := &server{
		visitorService:     visitorService,
		healthCheckService: healthCheckService,
		blogService:        blogService,
		logger:             logger,
		staticDir:          staticDir,
		g:                  g,
		appVersion:         appVersion,
		limitter:           rate.NewLimiter(rate.Limit(rateLimit), burst), // 100 requests per second with a burst of 10 requests
	}

	// Base Middleware
	g.Use(ginzap.Ginzap(logger, time.RFC3339, true)) // Logging
	g.Use(ginzap.RecoveryWithZap(logger, true))      // Logging
	g.Use(s.corsMiddleware)                          // CORS

	// API Group
	apiGroup := g.Group("/v1")
	apiGroup.Use(s.rateLimitAPIMiddleware)

	// Healthcheck APIs
	healthcheckGroup := apiGroup.Group("/healthcheck")
	healthcheckGroup.Use(s.healthCheckHeader)
	healthcheckGroup.POST("/", s.healthCheck)

	// Visitor APIs
	visitorGroup := apiGroup.Group("/visitor")
	visitorGroup.Use(s.visitorIPMiddleWare)
	visitorGroup.POST("/list", s.listVisitor)
	visitorGroup.POST("/setvisitortype", s.setVisitorType)

	// Blog APIs
	blogGroup := apiGroup.Group("/blog")
	blogGroup.POST("/get", s.getBlog)
	blogGroup.POST("/list", s.listBlog)

	// Static Handler
	g.GET("/*any", s.staticHandler)

	return s
}
