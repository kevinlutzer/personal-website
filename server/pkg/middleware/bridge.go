package middleware

import (
	"github.com/valyala/fasthttp"
	"go.uber.org/zap"
)

type Bridge = func(AppRequestHandler) fasthttp.RequestHandler

type bridgeBuilder struct {
	providers *Providers
	start     []MiddleWare
	finish    []MiddleWare
	logger    *zap.Logger
}

// NewBridgeBuilder creates a new BridgeBuilder.
func NewBridgeBuilder(logger *zap.Logger, providers *Providers) *bridgeBuilder {
	return &bridgeBuilder{
		providers: providers,
		logger:    logger,
	}
}

func (b *bridgeBuilder) Start(middlewares ...MiddleWare) *bridgeBuilder {
	b.start = middlewares
	return b
}

func (b *bridgeBuilder) Finish(middlewares ...MiddleWare) *bridgeBuilder {
	b.finish = middlewares
	return b
}

// Build and return the Bridge configured by this BridgeBuilder.
func (b *bridgeBuilder) Build() Bridge {
	return func(next AppRequestHandler) fasthttp.RequestHandler {

		bridge := func(requestCtx *fasthttp.RequestCtx) {
			ctx := NewAppCtx(requestCtx, b.providers, b.logger)
			for _, m := range b.start {
				m(ctx)
			}

			next(ctx)

			for _, m := range b.finish {
				m(ctx)
			}

		}

		return bridge
	}
}
