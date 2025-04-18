# Define variables
DOCKER_USERNAME := "kevinlutzer"
APPLICATION_NAME := "personal-website:5"

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
    export $(cat .env | xargs)
    cd server && go run ./cmd/main.go ./cmd/env.go ./cmd/errors.go

# Build the server
build-server os='linux' arch='amd64':
    #!/bin/bash
    cd server
    env GOOS={{os}} GOARCH={{arch}} go build -o main cmd/main.go cmd/env.go cmd/errors.go

# Build the web frontend
build-web:
    #!/bin/bash
    npm --prefix ./web install
    npm --prefix ./web run build

# Push Docker image
push:
    docker push {{DOCKER_USERNAME}}/{{APPLICATION_NAME}}

# Build Docker image
build os='linux' arch='amd64': build-server build-web
    #!/bin/bash
    docker buildx build --platform {{os}}/{{arch}} --tag {{DOCKER_USERNAME}}/{{APPLICATION_NAME}} .
