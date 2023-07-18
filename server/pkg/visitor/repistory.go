package visitor

import (
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
	"gorm.io/gorm"
)

type repo struct {
	db *gorm.DB
}

// interface for exposed methods
type Repo interface {
	Create(vistor *Visitor) error
	List() ([]Visitor, error)
	Update(ip string, visitorType VisitorType) error
}

func NewRepo(db *gorm.DB) Repo {
	db.AutoMigrate(&Visitor{})

	return &repo{
		db: db,
	}
}

func (s *repo) Create(vistor *Visitor) error {
	var tx *gorm.DB
	if _, ok := s.db.Get(vistor.IP); !ok {
		tx = s.db.Create(vistor)
	}

	if tx.Error != nil {
		return apperror.MySQLErrorCode(tx.Error)
	}

	return nil
}

func (s *repo) List() ([]Visitor, error) {
	visitors := []Visitor{}

	tx := s.db.Table("visitor").
		Select("visitor_type").
		Where("deleted = 0").
		Where("visitor_type <> ''").
		Scan(&visitors)

	if tx.Error != nil {
		return visitors, apperror.MySQLErrorCode(tx.Error)
	}

	return visitors, nil
}

func (s *repo) Update(ip string, visitorType VisitorType) error {
	tx := s.db.Table("visitor").
		Where("ip = ?", ip).
		Update("visitor_type", visitorType)

	if tx.Error != nil {
		return apperror.MySQLErrorCode(tx.Error)
	}

	return nil
}
