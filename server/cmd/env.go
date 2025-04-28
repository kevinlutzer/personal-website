package main

import (
	"os"
	"strconv"
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
var Env string
var Burst int
var RateLimit int
var StaticDir string

func init() {
	// DB Ping Host
	DBHost = os.Getenv("DB_HOST")
	DBName = os.Getenv("DB_NAME")
	DBPassword = os.Getenv("DB_PASSWORD")
	DBUser = os.Getenv("DB_USER")
	DBPort = os.Getenv("DB_PORT")
	DBSSLMode = os.Getenv("DB_SSL_MODE")
	StaticDir = os.Getenv("STATIC_DIR")

	// Server Setup
	PingHost = os.Getenv("PING_HOST")
	Port = os.Getenv("PORT")
	Version = os.Getenv("VERSION")
	Env = os.Getenv("ENV")

	var err error

	//
	// Grab Rate Limit Value
	//

	strRateLimit := os.Getenv("RATE_LIMIT")
	if strRateLimit == "" {
		RateLimit = 100
	} else {
		RateLimit, err = strconv.Atoi(strRateLimit)
		if err != nil {
			os.Exit(ErrFailedToGetRateLimit)
		}
	}

	//
	// Grab Burst Value
	//

	strBurst := os.Getenv("BURST")
	if strBurst == "" {
		Burst = 10
	} else {
		Burst, err = strconv.Atoi(strRateLimit)
		if err != nil {
			os.Exit(ErrFailedToBurstLimit)
		}
	}

	//
	// Check if the static directory exists
	//
	if _, err := os.Stat(StaticDir); os.IsNotExist(err) {
		os.Exit(ErrStaticDirNotFound)
	}

}
