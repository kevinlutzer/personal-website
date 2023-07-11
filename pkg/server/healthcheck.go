package server

import (
	"encoding/json"
	"net/http"
)

func (s *server) HealthCheck(w http.ResponseWriter, r *http.Request) {
	res := &Response[any]{
		Success: "Alive",
	}

	b, _ := json.Marshal(res)
	w.Write(b)
}
