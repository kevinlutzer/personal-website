package visitor

import (
	"time"
)

type VisitorType string

const (
	Friend               VisitorType = "Friend"
	Professor            VisitorType = "Professor"
	Other                VisitorType = "Other"
	AverageJoeJoesephine VisitorType = "Average Joe/Joesephine"
	Coworker             VisitorType = "Coworker"
	VentureCapitalist    VisitorType = "Venture Capitalist"
)

func GetVisitorTypes() []VisitorType {
	return []VisitorType{Friend, Professor, Other, AverageJoeJoesephine, Coworker, VentureCapitalist}
}

type Visitor struct {
	IP      string      `gorm:"primaryKey;size:48" json:"ip"` // ip v6 is 45 characters long, adding an extra few characters to be safe
	Type    VisitorType `json:"type"`
	Created time.Time   `gorm:"autoCreateTime" json:"created"`
	Deleted bool        `gorm:"default:false" json:"deleted:false"`
}

func (Visitor) TableName() string {
	return "visitor"
}

func (v *Visitor) Validate() bool {
	visitorTypes := GetVisitorTypes()
	for _, visitorType := range visitorTypes {
		if v.Type == visitorType {
			return true
		}
	}

	return false
}
