package server

import (
	"net/http"

	"github.com/kevinlutzer/personal-website-api/pkg/responsewriter"
)

func (s *server) HealthCheck(w http.ResponseWriter, r *http.Request) {
	responsewriter.WriteResponse[http.Header](w, r.Header, "Alive")
}
