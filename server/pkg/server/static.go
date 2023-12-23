package server

import (
	"slices"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
)

func (s *server) staticHandler(ctx *gin.Context) {

	path := ctx.Request.URL.Path

	// Prevent directory traversal
	if strings.Contains(path, "..") {
		s.setErrorResponse(ctx, apperror.NewError(apperror.InvalidArguments, "Cannot traverse the file tree ;)"))
		return
	}

	// Handle Angular Pages
	if slices.Contains([]string{"/projects", "/blogs", "/overview", "/"}, path) {
		ctx.File(s.staticDir + "/index.html")
		return
	}

	// Handle SCSS, JS, and CSS files
	for _, v := range []string{".scss", ".js", ".css", ".map"} {
		if strings.HasSuffix(path, v) {
			ctx.File(s.staticDir + path)
			return
		}
	}

	// Handle Other Assets Like Project Images and Icons
	if strings.HasPrefix(path, "/assets") {
		ctx.File(s.staticDir + path)
		return
	}

	ctx.Header("Cache-Control", "public, max-age=604800")

	// Error
	s.setErrorResponse(ctx, apperror.NewError(apperror.NotFound, "Page not found"))
}
