package server

import (
	"os"

	"github.com/gin-gonic/gin"
)

type healthCheckResponse struct {
	PostgresVersion string `json:"postgresVersion"`
	Version         string `json:"version"`
}

// Healthcheck APIs
func (s *server) healthCheck(ctx *gin.Context) {

	version := os.Getenv("VERSION")

	// don't crash the api if there is no version environment variable
	if version == "" {
		version = "1.0.0"
	}

	postgresVersion, err := s.healthCheckService.HealthCheck()
	if err != nil {
		s.setErrorResponse(ctx, err)
		return
	}

	resp := healthCheckResponse{
		PostgresVersion: postgresVersion,
		Version:         version,
	}

	s.setResponse(ctx, resp, "Alive")
}
