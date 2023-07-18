package middleware

import "github.com/kevinlutzer/personal-website/server/pkg/visitor"

type Providers struct {
	VisitorService visitor.Service
}

func NewProviders(visitorService visitor.Service) *Providers {
	return &Providers{
		VisitorService: visitorService,
	}
}
