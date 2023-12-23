package apperror

import (
	"errors"

	"gorm.io/gorm"
)

func ConvertGormErrorCode(err error) error {
	if errors.Is(err, gorm.ErrDuplicatedKey) {
		return NewError(AlreadyExists, "already exists")
	} else if errors.Is(err, gorm.ErrRecordNotFound) {
		return NewError(NotFound, "not found")
	}
	return err
}
