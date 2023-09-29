package healthcheck

import (
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
		return "", tx.Error
	}

	if err := tx.Row().Scan(&result); err != nil {
		return "", tx.Error
	}

	return result, nil
}
