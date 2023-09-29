package blog

import (
	"database/sql"
	"time"
)

type Blog struct {
	ID        string       `gorm:"primaryKey;size:36" json:"id"`
	Title     string       `gorm:"size:255" json:"title"`
	URL       string       `gorm:"size:255" json:"url"`
	Created   time.Time    `gorm:"autoCreateTime" json:"created"`
	Deleted   bool         `gorm:"default:false" json:"deleted:false"`
	Published sql.NullTime `json:"published:null"`
}

func (Blog) TableName() string {
	return "blog"
}

func (v *Blog) ToApi() map[string]interface{} {
	m := make(map[string]interface{})
	m["id"] = v.ID
	m["title"] = v.Title
	m["url"] = v.URL

	if !v.Created.IsZero() {
		m["created"] = v.Created.Format(time.RFC3339)
	}

	m["published"] = nil
	if v.Published.Valid {
		m["published"] = v.Published.Time
	}

	return m
}
