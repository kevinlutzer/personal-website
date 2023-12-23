package server

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
)

type ErrorResponse struct {
	ErrorMsg string `json:"error"`
}

type Response[T any] struct {
	Success string `json:"success"`
	Result  T      `json:"result"`
}

var errorTypeToCode = map[apperror.ErrorType]int{
	apperror.AlreadyExists:    http.StatusConflict,
	apperror.InvalidArguments: http.StatusPreconditionFailed,
	apperror.Internal:         http.StatusInternalServerError,
	apperror.NotFound:         http.StatusNotFound,
}

func (s *server) setResponse(ctx *gin.Context, result interface{}, success string) {
	res := Response[any]{
		Success: success,
		Result:  result,
	}

	ctx.JSON(http.StatusOK, res)
}

func (s *server) setErrorResponse(ctx *gin.Context, err error) {
	code := http.StatusInternalServerError
	msg := "Internal Error"

	var unmarshalTypeError *json.UnmarshalTypeError
	var invalidUnmarshalError *json.InvalidUnmarshalError
	var syntaxError *json.SyntaxError
	var appError *apperror.AppError

	// Check for App Error
	if errors.As(err, &appError) {
		c, ok := errorTypeToCode[appError.Type]
		if ok {
			msg = appError.Error()
			code = c
		}
		// Check for Unmarshal Type Error
	} else if errors.As(err, &unmarshalTypeError) {
		s.logger.Info("Unmarshal Type Error")
		msg = unmarshalTypeError.Error()
		code = http.StatusPreconditionFailed
		// Check for Invalid Unmarshal Error
	} else if errors.As(err, &invalidUnmarshalError) {
		s.logger.Info("Invalid Unmarshal Type Error")
		msg = invalidUnmarshalError.Error()
		code = http.StatusPreconditionFailed
	} else if errors.As(err, &syntaxError) {
		msg = syntaxError.Error()
		code = http.StatusPreconditionFailed
	}

	ctx.JSON(code, ErrorResponse{ErrorMsg: msg})
}
