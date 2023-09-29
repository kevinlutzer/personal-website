package middleware

import (
	"github.com/kevinlutzer/personal-website/server/pkg/blog"
	"github.com/kevinlutzer/personal-website/server/pkg/healthcheck"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
)

type Providers struct {
	VisitorService     visitor.Service
	BlogService        blog.Service
	HealthCheckService healthcheck.Service
}

func NewProviders(visitorService visitor.Service, blogService blog.Service, healthCheckService healthcheck.Service) *Providers {
	return &Providers{
		VisitorService:     visitorService,
		BlogService:        blogService,
		HealthCheckService: healthCheckService,
	}
}
