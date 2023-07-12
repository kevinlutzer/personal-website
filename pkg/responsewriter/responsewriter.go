package responsewriter

import (
	"encoding/json"
	"net/http"

	"github.com/kevinlutzer/personal-website-api/pkg/apperror"
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

func WriteResponse[T any](w http.ResponseWriter, result T, success string) {
	res := Response[T]{
		Success: success,
		Result:  result,
	}

	b, err := json.Marshal(res)
	if err != nil {
		WriteErrorResponse(w, apperror.NewError(apperror.Internal, "Failed to marshal response"))
		return
	}

	w.Write(b)
}

func WriteErrorResponse(w http.ResponseWriter, err error) {
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

	json, _ := json.Marshal(ErrorResponse{ErrorMsg: msg})

	w.WriteHeader(code)
	w.Write(json)
}
