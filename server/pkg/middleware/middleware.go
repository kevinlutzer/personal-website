package middleware

import (
	"log"
	"net/http"
	"strings"
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
	// prioritize the Do-Connecting-Ip header set by Digital Ocean
	ipHeaders := []string{"Do-Connecting-Ip", "X-REAL-IP", "X-Real-Ip", "x-real-ip", "X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
	for _, ipHeader := range ipHeaders {
		ip := h.Get(ipHeader)

		// check and see if the header value is a comma separated list of IPs
		if ip != "" {
			split := strings.Split(ip, ",")
			if len(split) > 1 {
				// This will give us the IPv6 address if it exists
				return split[0], nil
			}

			return ip, nil
		}
	}

	return "", apperror.NewError(apperror.InvalidArguments, "x-forwarded-for header is required")
}

func (m *Middleware) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("Access-Control-Allow-Origin", "lutzer.ca, kevinlutzer.ca")
	w.Header().Add("Access-Control-Allow-Credentials", "true")
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")

	if r.Method == "OPTIONS" {
		http.Error(w, "No Content", http.StatusNoContent)
		return
	}

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
