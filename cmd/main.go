package main

import (
	"crypto/x509"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/go-sql-driver/mysql"
	"github.com/kevinlutzer/personal-website-api/pkg/middleware"
	"github.com/kevinlutzer/personal-website-api/pkg/server"
	"github.com/kevinlutzer/personal-website-api/pkg/visitor"
	gormmysql "gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main() {

	rootCertPool := x509.NewCertPool()
	path, _ := filepath.Abs("./cmd/ca-certificate.crt")
	pem, err := ioutil.ReadFile(path)
	if err != nil {
		log.Fatal(err)
	}

	rootCertPool.AppendCertsFromPEM(pem)

	cfg := &mysql.Config{
		User:                 "doadmin",
		Passwd:               "AVNS_37P0b6kXDB1cj42GinM",
		Addr:                 "core-do-user-14361188-0.b.db.ondigitalocean.com:25060", //IP:PORT
		Net:                  "tcp",
		DBName:               "personal_website",
		Loc:                  time.Local,
		AllowNativePasswords: true,
	}

	cfg.TLSConfig = "skip-verify"
	dsn := cfg.FormatDSN()

	// dns := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True&loc=Local", "linroot", "0BpS$h5IorGkiQOZ", "lin-24635-13936-mysql-primary.servers.linodedb.net", 3306, "personal_website")
	db, err := gorm.Open(gormmysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to the database: %s\n", err.Error())
		os.Exit(10)
	}

	visitorRepo := visitor.NewRepo(db)
	visitorService := visitor.NewService((visitorRepo))

	server := server.NewServer(visitorService)

	mux := http.NewServeMux()

	// Setup Routes
	mux.HandleFunc("/v1/visitor/list", server.ListVisitor)
	mux.HandleFunc("/v1/healthcheck", server.HealthCheck)

	wrappedMux := middleware.NewMiddleware(mux, visitorService)

	log.Fatal(http.ListenAndServe(":80", wrappedMux))
	http.ListenAndServe(":80", nil)
}
