package middleware

import (
	"log"
	"net/http"
	"time"

	"github.com/kevinlutzer/personal-website-api/pkg/apperror"
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
	ipHeaders := []string{"X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
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
		m.writeErrorResponse(w, err)
		return
	}

	if err := m.visitorService.Create(ip); err != nil {
		log.Println(err.Error())

		m.writeErrorResponse(w, err)
		return
	}

	// Handle Http Request
	start := time.Now()
	m.handler.ServeHTTP(w, r)
	log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
}
