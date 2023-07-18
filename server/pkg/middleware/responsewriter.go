package middleware

import (
	"encoding/json"

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
	apperror.AlreadyExists: 409,
}

func SetResponse[T any](ctx *AppCtx, result T, success string) {
	res := Response[T]{
		Success: success,
		Result:  result,
	}

	b, err := json.Marshal(res)
	if err != nil {
		SetErrorResponse(ctx, apperror.NewError(apperror.Internal, "Failed to marshal response"))
		return
	}

	ctx.Response.Header.Set("Content-Type", "application/json; charset=UTF-8")
	ctx.SetBody(b)
}

func SetErrorResponse(ctx *AppCtx, err error) {
	var code int
	var ok bool
	var msg string

	appError, ok := err.(*apperror.RequestError)
	if !ok {
		msg = "Internal Error"
		code = 500
	}

	msg = err.Error()
	code, ok = errorTypeToCode[appError.Type]
	if !ok {
		code = 500
	}

	b, _ := json.Marshal(ErrorResponse{ErrorMsg: msg})

	ctx.Response.Header.Set("Content-Type", "application/json; charset=UTF-8")
	ctx.SetBody(b)
	ctx.SetStatusCode(code)
}
