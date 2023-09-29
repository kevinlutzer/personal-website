package server

import (
	"os"

	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
)

type healthCheckResponse struct {
	PostgresVersion string `json:"postgresVersion"`
	Version         string `json:"version"`
}

// Healthcheck APIs
func HealthCheck(ctx *middleware.AppCtx) {

	version := os.Getenv("VERSION")

	// don't crash the api if there is no version environment variable
	if version == "" {
		version = "1.0.0"
	}

	postgresVersion, err := ctx.Providers.HealthCheckService.HealthCheck()
	if err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	resp := healthCheckResponse{
		PostgresVersion: postgresVersion,
		Version:         version,
	}

	middleware.SetResponse[healthCheckResponse](ctx, resp, "Alive")
}
