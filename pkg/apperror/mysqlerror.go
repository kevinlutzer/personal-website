package apperror

import (
	"fmt"

	"github.com/go-sql-driver/mysql"
)

func MySQLErrorCode(err error) error {
	var code uint16
	if val, ok := err.(*mysql.MySQLError); ok {
		code = val.Number
	}

	if code == 1062 {
		return NewError(AlreadyExists, "visitor already exists")
	}

	fmt.Println(err)

	return NewError(Internal, "something happened")
}
