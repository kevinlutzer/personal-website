package middleware

import (
	"time"

	"github.com/valyala/fasthttp"
	"go.uber.org/zap"
)

// AppCtx contains the providers for the app, logging, and other shared
// resosources between the different handlers
type AppCtx struct {
	*fasthttp.RequestCtx

	Start time.Time

	ClientIP  string
	Providers *Providers
	Logger    *zap.Logger
}

func NewAppCtx(reqCtx *fasthttp.RequestCtx, providers *Providers, logger *zap.Logger) (ctx *AppCtx) {
	ctx = &AppCtx{
		RequestCtx: reqCtx,
		Providers:  providers,
		Logger:     logger,
	}

	return ctx
}

type AppRequestHandler = func(ctx *AppCtx)
