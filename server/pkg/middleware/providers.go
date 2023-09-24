package middleware

import (
	"github.com/kevinlutzer/personal-website/server/pkg/healthcheck"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
)

type Providers struct {
	VisitorService     visitor.Service
	HealthCheckService healthcheck.Service
}

func NewProviders(visitorService visitor.Service, healthCheckService healthcheck.Service) *Providers {
	return &Providers{
		VisitorService:     visitorService,
		HealthCheckService: healthCheckService,
	}
}
