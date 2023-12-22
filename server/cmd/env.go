package main

import (
	"fmt"
	"os"
)

// DB Environment Variables
var DBHost string
var DBName string
var DBPassword string
var DBUser string
var DBPort string
var DBSSLMode string

// Other Server Environment Variables
var PingHost string
var Port string
var Version string
var StaticDir string

func init() {
	// DB Ping Host
	DBHost = os.Getenv("DB_HOST")
	DBName = os.Getenv("DB_NAME")
	DBPassword = os.Getenv("DB_PASSWORD")
	DBUser = os.Getenv("DB_USER")
	DBPort = os.Getenv("DB_PORT")
	DBSSLMode = os.Getenv("DB_SSL_MODE")

	fmt.Println("DB_HOST: ", DBHost)

	// Server Setup
	PingHost = os.Getenv("PING_HOST")
	Port = os.Getenv("PORT")
	Version = os.Getenv("VERSION")
	StaticDir = os.Getenv("STATIC_DIR")
}
