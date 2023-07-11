package visitor

import (
	"time"
)

type Visitor struct {
	IP      string    `gorm:"primaryKey;size:48" json:"ip"`
	Type    string    `json:"type"`
	Created time.Time `gorm:"autoCreateTime" json:"created"`
}

func (Visitor) TableName() string {
	return "visitor"
}
