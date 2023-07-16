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

func setupDB() *gorm.DB {
	host := os.Getenv("DB_HOST")
	name := os.Getenv("DB_NAME")
	password := os.Getenv("DB_PASSWORD")
	user := os.Getenv("DB_USER")

	if (host == "") || (name == "") || (password == "") || (user == "") {
		log.Fatalf("Missing environment variables. Please set DB_HOST, DB_NAME, DB_PASSWORD, and DB_USER.\n")
		os.Exit(9)

		return nil
	}

	rootCertPool := x509.NewCertPool()
	path, err := filepath.Abs("./cmd/ca-certificate.crt")
	if err != nil {
		log.Fatalf("Failed to get absolute path: %s\n", err.Error())
		os.Exit(8)
		return nil
	}

	pem, err := ioutil.ReadFile(path)
	if err != nil {
		log.Fatalf("Failed to read certificate file: %s\n", err.Error())
		os.Exit(7)
		return nil
	}

	rootCertPool.AppendCertsFromPEM(pem)
	cfg := &mysql.Config{
		User:                 user,
		Passwd:               password,
		Addr:                 host, //IP:PORT
		Net:                  "tcp",
		DBName:               name,
		Loc:                  time.Local,
		AllowNativePasswords: true,
	}

	cfg.TLSConfig = "skip-verify"
	dsn := cfg.FormatDSN()

	gorm, err := gorm.Open(gormmysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to the database: %s\n", err.Error())
		os.Exit(6)

		return nil
	}

	return gorm
}

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatalf("PORT environment variable not set\n")
		os.Exit(10)
	}

	log.Println("Setting up database connection...")
	db := setupDB()

	visitorRepo := visitor.NewRepo(db)
	visitorService := visitor.NewService((visitorRepo))

	mux := http.NewServeMux()
	server.SetupRoutes(mux, visitorService)

	wrappedMux := middleware.NewMiddleware(mux, visitorService)

	log.Println("Starting server...")

	if err := http.ListenAndServe(":"+port, wrappedMux); err != nil {
		log.Fatalf("Failed to start server: %s\n", err.Error())
		os.Exit(11)
	}
}
