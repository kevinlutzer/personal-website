package main

import (
	"os"

	"net/http"

	"github.com/fasthttp/router"
	"github.com/kevinlutzer/personal-website/server/pkg/blog"
	"github.com/kevinlutzer/personal-website/server/pkg/healthcheck"
	"github.com/kevinlutzer/personal-website/server/pkg/server"
	"github.com/kevinlutzer/personal-website/server/pkg/visitor"
	cron "github.com/robfig/cron/v3"
	"github.com/valyala/fasthttp"
	"go.uber.org/zap"
	gormpostgres "gorm.io/driver/postgres"
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

	dsn := "host=" + host + " user=" + user + " password=" + password + " dbname=" + name + " port=5432 sslmode=disable TimeZone=UTC"
	gorm, err := gorm.Open(gormpostgres.Open(dsn), &gorm.Config{TranslateError: true})
	if err != nil {
		logger.Sugar().Fatalf("Failed to connect to the database: %s\n", err.Error())
		os.Exit(6)

		return nil
	}

	return gorm
}

func setupPing(log *zap.Logger) {
	pingHost := os.Getenv("PING_HOST")
	if pingHost == "" {
		log.Info("No PING_HOST specific so cron job was not setup...")
		return
	}

	log.Info("Setup the ping cron job...")
	cron := cron.New()
	cron.AddFunc("@every 10s", func() {
		if _, err := http.Get("https://" + pingHost); err != nil {
			log.Error("Failed to ping healthcheck", zap.Error(err))
			return
		}

		log.Info("Successfully pinged healthcheck")
	})

	// Starts it's own go routine
	cron.Start()
}

func main() {
	logger, err := zap.NewDevelopment()
	if err != nil {
		os.Exit(9)
	}

	setupPing(logger)

	port := os.Getenv("PORT")
	if port == "" {
		logger.Sugar().Fatalf("PORT environment variable not set\n")
		os.Exit(10)
	}

	db := setupDB(logger)

	visitorRepo := visitor.NewRepo(db)
	visitorService := visitor.NewService((visitorRepo))

	healthCheckService := healthcheck.NewService(db)

	blogRepo := blog.NewRepo(db)
	blogService := blog.NewService(blogRepo)

	r := router.New()
	server.SetupRoutes(r, logger, healthCheckService, blogService, visitorService)

	logger.Info("Starting server...")

	if err := fasthttp.ListenAndServe(":"+port, r.Handler); err != nil {
		logger.Sugar().Fatalf("Failed to start server: %s\n", err.Error())
		os.Exit(11)
	}
}
