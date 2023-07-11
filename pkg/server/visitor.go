package server

import (
	"encoding/json"
	"net/http"

	"github.com/kevinlutzer/personal-website-api/pkg/apperror"
	"github.com/kevinlutzer/personal-website-api/pkg/responsewriter"
)

func (s *server) getIPFromHeader(h http.Header) (string, error) {
	ipHeaders := []string{"X-FORWARDED-FOR", "x-forwarded-for", "X-Forwarded-For"}
	for _, ipHeader := range ipHeaders {
		if ip := h.Get(ipHeader); ip != "" {
			return ip, nil
		}
	}

	return "", apperror.NewError(apperror.InvalidArguments, "x-forwarded-for header is required")
}

func (s *server) ListVisitor(w http.ResponseWriter, r *http.Request) {
	visitors, err := s.visitorService.List()
	if err != nil {
		responsewriter.WriteErrorResponse(w, err)
		return
	}

	val, err := json.Marshal(visitors)
	if err != nil {
		err := apperror.NewError(apperror.Internal, "Failed to marshal vistor information")
		responsewriter.WriteErrorResponse(w, err)
		return
	}

	w.Write(val)
}
