package main

import (
	"os"
	"time"

	"github.com/fasthttp/router"
	"github.com/go-sql-driver/mysql"
	"github.com/kevinlutzer/personal-website/server/pkg/server"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
	"github.com/valyala/fasthttp"
	"go.uber.org/zap"
	gormmysql "gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func setupDB(logger *zap.Logger) *gorm.DB {

	host := os.Getenv("DB_HOST")
	name := os.Getenv("DB_NAME")
	password := os.Getenv("DB_PASSWORD")
	user := os.Getenv("DB_USER")

	logger.Sugar().Info("Setting up database connection...")

	if (host == "") || (name == "") || (password == "") || (user == "") {
		logger.Sugar().Fatal("Missing environment variables. Please set DB_HOST, DB_NAME, DB_PASSWORD, and DB_USER.\n")
		os.Exit(9)
	}

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
		logger.Sugar().Fatalf("Failed to connect to the database: %s\n", err.Error())
		os.Exit(6)

		return nil
	}

	return gorm
}

func main() {

	logger, err := zap.NewDevelopment()
	if err != nil {
		os.Exit(9)
	}

	port := os.Getenv("PORT")
	if port == "" {
		logger.Sugar().Fatalf("PORT environment variable not set\n")
		os.Exit(10)
	}

	db := setupDB(logger)

	visitorRepo := visitor.NewRepo(db)
	visitorService := visitor.NewService((visitorRepo))

	r := router.New()
	server.SetupRoutes(r, logger, visitorService)

	logger.Info("Starting server...")

	if err := fasthttp.ListenAndServe(":"+port, r.Handler); err != nil {
		logger.Sugar().Fatalf("Failed to start server: %s\n", err.Error())
		os.Exit(11)
	}
}
