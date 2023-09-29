package blog

import (
	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
	"gorm.io/gorm"
)

type repo struct {
	db *gorm.DB
}

// interface for exposed methods
type Repository interface {
	Get(id string) (Blog, error)
	Update(id string, values map[string]interface{}) error
	Create(blog *Blog) error
	List(cursor int, pageSize int) ([]Blog, error)
}

func NewRepo(db *gorm.DB) Repository {
	db.AutoMigrate(&Blog{})

	return &repo{
		db: db,
	}
}

func (r *repo) Get(id string) (Blog, error) {
	var blog Blog
	tx := r.db.First(&blog, "id = ?", id)
	if tx.Error != nil {
		return Blog{}, apperror.ConvertGormErrorCode(tx.Error)
	}

	return blog, nil
}

func (s *repo) Update(id string, values map[string]interface{}) error {
	tx := s.db.Table("blog").
		Where("id = ?", id).
		Updates(values)

	if tx.Error != nil {
		return apperror.ConvertGormErrorCode(tx.Error)
	}

	return nil
}

func (r *repo) Create(blog *Blog) error {
	tx := r.db.Create(blog)
	if tx.Error != nil {
		return apperror.ConvertGormErrorCode(tx.Error)
	}

	return nil
}

func (r *repo) List(cursor int, pageSize int) ([]Blog, error) {
	var blogs []Blog
	tx := r.db.
		Order("published desc").
		Limit(pageSize).
		Offset(cursor).
		Find(&blogs)

	if tx.Error != nil {
		return nil, apperror.ConvertGormErrorCode(tx.Error)
	}

	return blogs, nil
}
