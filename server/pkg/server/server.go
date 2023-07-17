package server

import (
	"net/http"

	"github.com/kevinlutzer/personal-website-api/pkg/visitor"
)

type server struct {
	visitorService visitor.Service
}

type Server interface {
	HealthCheck(w http.ResponseWriter, r *http.Request)

	// Visitor APIs
	ListVisitor(w http.ResponseWriter, r *http.Request)
	SetVisitorResponse(w http.ResponseWriter, r *http.Request)
}

func SetupRoutes(mux *http.ServeMux, visitorService visitor.Service) {
	server := &server{
		visitorService: visitorService,
	}

	// Setup Routes
	mux.HandleFunc("/v1/visitor/list", server.ListVisitor)
	mux.HandleFunc("/v1/visitor/setvisitortype", server.SetVisitorType)
	mux.HandleFunc("/v1/healthcheck", server.HealthCheck)
}
