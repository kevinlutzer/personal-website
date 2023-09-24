package healthcheck

import (
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
	"gorm.io/gorm"
)

type service struct {
	db *gorm.DB
}

type Service interface {
	HealthCheck() (string, error)
}

func NewService(db *gorm.DB) Service {
	return &service{db: db}
}

func (s *service) HealthCheck() (string, error) {
	var result string
	tx := s.db.Raw("SELECT version();")
	if tx.Error != nil {
		return "", apperror.MySQLErrorCode(tx.Error)
	}

	if err := tx.Row().Scan(&result); err != nil {
		return "", apperror.MySQLErrorCode(err)
	}

	return result, nil
}
