package server

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/kevinlutzer/personal-website-api/pkg/apperror"
	"github.com/kevinlutzer/personal-website-api/pkg/responsewriter"
	"github.com/kevinlutzer/personal-website-api/pkg/visitor"
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

	api_visitors := make([]map[string]interface{}, len(visitors))
	for i, visitor := range visitors {
		api_visitors[i] = visitor.ToApi()
	}

	val, err := json.Marshal(api_visitors)
	if err != nil {
		err := apperror.NewError(apperror.Internal, "Failed to marshal vistor information")
		responsewriter.WriteErrorResponse(w, err)
		return
	}

	w.Write(val)
}

type SetVisitorRequest struct {
	VisitorType string `json:"visitorType"`
}

func (s *server) SetVisitorType(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		responsewriter.WriteErrorResponse(w, apperror.NewError(apperror.InvalidArguments, "Body is not valid json"))
		return
	}

	var req SetVisitorRequest
	if err := json.Unmarshal(body, &req); err != nil {
		responsewriter.WriteErrorResponse(w, apperror.NewError(apperror.InvalidArguments, "Field 'visitorType' is required"))
		return
	}

	// Swallow error as we don't want to return an error if we can't get the ip
	ip, err := s.getIPFromHeader(r.Header)
	if err != nil {
		responsewriter.WriteResponse[any](w, nil, "Successly replaced visitor type!")
		return
	}

	if err = s.visitorService.SetVisitorType(ip, visitor.VisitorType(req.VisitorType)); err != nil {
		responsewriter.WriteErrorResponse(w, apperror.NewError(apperror.Internal, "Failed to set visitor type"))
		return
	}

	responsewriter.WriteResponse[any](w, nil, "Successly set the visitor type!")
}
