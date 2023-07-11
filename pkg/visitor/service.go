package visitor

import "github.com/kevinlutzer/personal-website-api/pkg/apperror"

type service struct {
	repo Repo
}

type Service interface {
	Create(ip string) error
	SetResponse(id, string, visitorType VisitorType)
	List() ([]Visitor, error)
}

func NewService(repo Repo) Service {
	return &service{repo: repo}
}

func (s *service) Create(ip string) error {
	if err := s.repo.Create(&Visitor{IP: ip}); err != nil {
		val, _ := err.(*apperror.RequestError)

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

func (s *service) SetResponse(ip string, visitorType VisitorType) {
	s.repo.Update()
}
