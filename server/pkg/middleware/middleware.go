package middleware

import (
	"strings"
	"time"

	"github.com/valyala/fasthttp"
)

type MiddleWare = AppRequestHandler

func NewHeadersMiddleWare(responseHeaders map[string]string) MiddleWare {
	return func(ctx *AppCtx) {
		ctx.Response.Header.Set("Access-Control-Allow-Origin", "kevinlutzer.ca,www.kevinlutzer.ca,www.kevin.lutzer.ca,kevin.lutzer.ca")
		ctx.Response.Header.Set("Access-Control-Allow-Headers", "origin,content-type,accept")
		ctx.Response.Header.Set("Access-Control-Allow-Credentials", "true")

		ctx.Response.Header.Set("Content-Type", "application/json;charset=utf-8")

		// Overite preset headers
		for k, v := range responseHeaders {
			ctx.Response.Header.Set(k, v)
		}

		// Add time start so that we can get analytics about how long the api calls are
		ctx.Start = time.Now()
	}
}

func getIPFromHeader(req *fasthttp.Request) string {
	// prioritize the Do-Connecting-Ip header set by Digital Ocean
	ipHeaders := []string{"Do-Connecting-Ip", "X-REAL-IP", "X-Real-Ip", "x-real-ip", "X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
	var ip string
	for _, ipHeader := range ipHeaders {
		ipBytes := req.Header.Peek(ipHeader)
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

	return ip
}

func NewRecordVisitorMiddleWare() MiddleWare {
	return func(ctx *AppCtx) {
		ip := getIPFromHeader(&ctx.Request)
		ctx.ClientIP = ip

		// record the visitor, if we error just swallow it
		if err := ctx.Providers.VisitorService.Create(ip); err != nil {
			ctx.Logger.Sugar().Errorf("Error creating visitor: %s", err)
		}
	}
}
