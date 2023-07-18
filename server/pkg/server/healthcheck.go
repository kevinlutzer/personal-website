package server

import (
	"github.com/kevinlutzer/personal-website/server/pkg/middleware"
)

func HealthCheck(r *middleware.AppCtx) {
	middleware.SetResponse[any](r, nil, "Alive")
}
