package middleware

import (
	"strings"
	"time"
)

type MiddleWare = AppRequestHandler

func NewHeadersMiddleWare() MiddleWare {
	return func(ctx *AppCtx) {
		ctx.Response.Header.Set("Access-Control-Allow-Origin", "kevinlutzer.ca,www.kevinlutzer.ca,www.kevin.lutzer.ca,kevin.lutzer.ca")
		ctx.Response.Header.Set("Access-Control-Allow-Headers", "origin,content-type,accept")
		ctx.Response.Header.Set("Access-Control-Allow-Credentials", "true")

		ctx.Response.Header.Set("Content-Type", "application/json;charset=utf-8")

		// Add time start so that we can get analytics about how long the api calls are
		ctx.Start = time.Now()
	}
}

func NewGetIPMiddleWare() MiddleWare {
	return func(ctx *AppCtx) {
		// prioritize the Do-Connecting-Ip header set by Digital Ocean
		ipHeaders := []string{"Do-Connecting-Ip", "X-REAL-IP", "X-Real-Ip", "x-real-ip", "X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
		var ip string
		for _, ipHeader := range ipHeaders {
			ipBytes := ctx.Request.Header.Peek(ipHeader)
			ip = string(ipBytes[:])

			// check and see if the header value is a comma separated list of IPs
			if ip != "" {
				split := strings.Split(ip, ",")
				if len(split) > 1 {
					// This will give us the IPv6 address if it exists
					ip = split[0]
				}
			}
		}

		ctx.ClientIP = ip
	}
}

func NewAnalyticsMiddleWare() MiddleWare {
	return func(ctx *AppCtx) {
		end := time.Now()
		start := ctx.Start

		ctx.Logger.Sugar().Infof("Request %s duration %s", ctx.Request.URI().Path(), end.Sub(start))
		ctx.Logger.Sync()
	}
}
