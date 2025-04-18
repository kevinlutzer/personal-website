# Define variables
DOCKER_USERNAME := "kevinlutzer"
APPLICATION_NAME := "personal-website:latest"

# Start PostgreSQL database
start-db:
    docker run -e POSTGRES_PASSWORD=password -e POSTGRES_USER=personalwebsite -p 5432:5432 -d postgres

# Start the web frontend
start-web:
    npm --prefix ./web install
    npm --prefix ./web run start

# Start the Go backend server
start-server:
    #!/bin/bash
    
    # Check if .env file exists
    if [ ! -f ".env" ]; then
        echo "Add .env file to the root directory"
        exit 1
    fi

    # Check load variables from file
    export $(cat .env | xargs)

    cd server && \
    go run ./cmd/main.go ./cmd/env.go ./cmd/errors.go

# Build the web frontend
build-web:
    npm --prefix ./web install
    npm --prefix ./web run build

# Build Docker image
build:
    npm --prefix ./web install
    npm --prefix ./web run build
    docker buildx build --push --platform linux/amd64 --tag {{DOCKER_USERNAME}}/{{APPLICATION_NAME}} .

# Push Docker image
push:
    docker push {{DOCKER_USERNAME}}/{{APPLICATION_NAME}}
