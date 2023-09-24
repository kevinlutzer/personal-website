package server

import (
	"os"

	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
)

type healthCheckResponse struct {
	MysqlVersion string `json:"mysql_version"`
	Verson       string `json:"version"`
}

// Healthcheck APIs
func HealthCheck(ctx *middleware.AppCtx) {

	version := os.Getenv("VERSION")

	// don't crash the api if there is no version environment variable
	if version == "" {
		version = "1.0.0"
	}

	mysqlVersion, err := ctx.Providers.HealthCheckService.HealthCheck()
	if err != nil {
		middleware.SetErrorResponse(ctx, err)
		return
	}

	resp := healthCheckResponse{
		MysqlVersion: mysqlVersion,
		Verson:       version,
	}

	middleware.SetResponse[healthCheckResponse](ctx, resp, "Alive")
}
