package middleware

import (
	"encoding/json"
	"errors"
	"fmt"

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
	apperror.AlreadyExists:    409,
	apperror.InvalidArguments: 412,
	apperror.Internal:         500,
	apperror.NotFound:         404,
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
	code := 500
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
		ctx.Logger.Info("Unmarshal Type Error")
		msg = unmarshalTypeError.Error()
		code = 412
		// Check for Invalid Unmarshal Error
	} else if errors.As(err, &invalidUnmarshalError) {
		ctx.Logger.Info("Invalid Unmarshal Type Error")
		msg = invalidUnmarshalError.Error()
		code = 412
	} else if errors.As(err, &syntaxError) {
		msg = syntaxError.Error()
		code = 412
	}

	fmt.Println(err)
	// msg = err.Error()

	b, _ := json.Marshal(ErrorResponse{ErrorMsg: msg})

	ctx.Response.Header.Set("Content-Type", "application/json; charset=UTF-8")
	ctx.SetBody(b)
	ctx.SetStatusCode(code)
}
