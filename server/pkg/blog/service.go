package blog

import (
	"database/sql"
	"errors"
	"time"

	"github.com/kevinlutzer/personal-website/server/pkg/apperror"
)

type service struct {
	repo Repository
}

type Service interface {
	Get(id string) (Blog, error)
	List(cursor int, pageSize int) ([]Blog, error)
	Replace(id string, fieldMask []string, title string, url string, deleted bool, published time.Time) error
}

func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) List(cursor int, pageSize int) ([]Blog, error) {
	return s.repo.List(cursor, pageSize)
}

func (s *service) Replace(id string, fieldMask []string, title string, url string, deleted bool, published time.Time) error {

	// Build blog model and values map for either the Update or Create call below
	model := &Blog{
		ID: id,
	}
	modelValues := make(map[string]interface{})

	for _, field := range fieldMask {
		switch field {
		case "title":
			{
				modelValues["title"] = title
				model.Title = title
			}
		case "url":
			{
				modelValues["url"] = url
				model.URL = url
			}
		case "deleted":
			{
				modelValues["deleted"] = deleted
				model.Deleted = deleted
			}
		case "published":
			{
				modelValues["published"] = published
				model.Published = sql.NullTime{
					Time:  published,
					Valid: true,
				}
			}
		}
	}

	err := s.repo.Create(model)
	var appError *apperror.AppError
	if err != nil {
		if errors.As(err, &appError) {
			if appError.Type == apperror.AlreadyExists {
				return s.repo.Update(id, modelValues)
			}

			return appError
		}

		return err
	}

	return nil
}

func (s *service) Get(id string) (Blog, error) {
	return s.repo.Get(id)
}
