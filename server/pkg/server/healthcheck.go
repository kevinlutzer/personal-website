package server

import (
	"github.com/gin-gonic/gin"
)

type healthCheckResponse struct {
	PostgresVersion string `json:"postgresVersion"`
	Version         string `json:"version"`
}

// Healthcheck APIs
func (s *server) healthCheck(ctx *gin.Context) {

	postgresVersion, err := s.healthCheckService.HealthCheck()
	if err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	resp := healthCheckResponse{
		PostgresVersion: postgresVersion,
		Version:         s.appVersion,
	}

	s.setResponse(ctx, resp, "Alive")
}
