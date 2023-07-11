package visitor

import (
	"fmt"

	"github.com/go-sql-driver/mysql"
	"github.com/kevinlutzer/personal-website-api/pkg/apperror"
	"gorm.io/gorm"
)

type repo struct {
	db *gorm.DB
}

func mySQLErrorCode(err error) error {
	var code uint16
	if val, ok := err.(*mysql.MySQLError); ok {
		code = val.Number
	}

	if code == 1062 {
		return apperror.NewError(apperror.AlreadyExists, "visitor already exists")
	}

	fmt.Println(err)

	return apperror.NewError(apperror.Internal, "something happened")
}

// interface for exposed methods
type Repo interface {
	Create(vistor *Visitor) error
	List() ([]Visitor, error)
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
		return mySQLErrorCode(tx.Error)
	}

	return nil
}

func (s *repo) List() ([]Visitor, error) {
	visitors := []Visitor{}
	rows, err := s.db.Table("visitor").Select("created, type").Rows()
	defer rows.Close()

	if err != nil {
		fmt.Println(err)
		return visitors, mySQLErrorCode(err)
	}

	if tx := s.db.Table("visitor").Select("created, type").Scan(&visitors); tx.Error != nil {
		return visitors, mySQLErrorCode(err)
	}

	return visitors, nil
}
