package blog

import (
	"database/sql"
	"time"

	"github.com/lib/pq"
)

type Blog struct {
	ID           string         `gorm:"primaryKey;size:36"`
	Title        string         `gorm:"size:255"`
	Description  string         `gorm:"size:4096"`
	URL          string         `gorm:"size:255"`
	ThumbnailURL string         `gorm:"size:255"`
	Created      time.Time      `gorm:"autoCreateTime"`
	Deleted      bool           `gorm:"default:false"`
	Tags         pq.StringArray `gorm:"type:text[]"`
	Published    sql.NullTime
}

func (Blog) TableName() string {
	return "blog"
}

func (v *Blog) ToApi() map[string]interface{} {
	m := make(map[string]interface{})
	m["id"] = v.ID
	m["title"] = v.Title
	m["description"] = v.Description
	m["url"] = v.URL
	m["thumbnailUrl"] = v.ThumbnailURL
	m["tags"] = v.Tags

	if !v.Created.IsZero() {
		m["created"] = v.Created.Format(time.RFC3339)
	}

	m["published"] = nil
	if v.Published.Valid {
		m["published"] = v.Published.Time
	}

	return m
}
