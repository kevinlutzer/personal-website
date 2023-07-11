package middleware

import (
	"log"
	"net/http"
	"time"

	"github.com/kevinlutzer/personal-website-api/pkg/apperror"
	"github.com/kevinlutzer/personal-website-api/pkg/responsewriter"
	"github.com/kevinlutzer/personal-website-api/pkg/visitor"
)

// Logger is a middleware handler that does request logging
type Middleware struct {
	handler        http.Handler
	visitorService visitor.Service
}

func NewMiddleware(handlerToWrap http.Handler, visitorService visitor.Service) *Middleware {
	return &Middleware{handlerToWrap, visitorService}
}

func (m *Middleware) getIPFromHeader(h http.Header) (string, error) {
	// priotize the x-read-ip header over the x-forwarded-for header as that is the
	// header coming from the nginx ingress
	ipHeaders := []string{"X-REAL-IP", "X-Real-Ip", "x-real-ip", "X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
	for _, ipHeader := range ipHeaders {
		if ip := h.Get(ipHeader); ip != "" {
			return ip, nil
		}
	}

	return "", apperror.NewError(apperror.InvalidArguments, "x-forwarded-for header is required")
}

func (m *Middleware) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	ip, err := m.getIPFromHeader((r.Header))
	if err != nil {
		responsewriter.WriteErrorResponse(w, err)
		return
	}

	if err := m.visitorService.Create(ip); err != nil {
		log.Println(err.Error())

		responsewriter.WriteErrorResponse(w, err)
		return
	}

	// Handle Http Request
	start := time.Now()
	m.handler.ServeHTTP(w, r)
	log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
}
