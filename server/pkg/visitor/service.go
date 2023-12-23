package visitor

import "github.com/kevinlutzer/personal-website/server/pkg/apperror"

type service struct {
	repo Repo
}

type Service interface {
	Create(ip string) error
	SetVisitorType(id string, visitorType VisitorType) error
	List() ([]Visitor, error)
}

func NewService(repo Repo) Service {
	return &service{repo: repo}
}

func (s *service) Create(ip string) error {
	// Swallow empty IP addresses, should never happen
	if ip == "" {
		return nil
	}

	if err := s.repo.Create(&Visitor{IP: ip}); err != nil {
		val, _ := err.(*apperror.AppError)

		// ignore already exists errors
		if val.Type == apperror.AlreadyExists {
			return nil
		}

		return err
	}

	return nil
}

func (s *service) List() ([]Visitor, error) {
	return s.repo.List()
}

func (s *service) SetVisitorType(ip string, visitorType VisitorType) error {
	return s.repo.Update(ip, visitorType)
}
