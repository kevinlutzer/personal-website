# Personal Website

The client wep app for my personal website. 

# Run NPM Server

`cd web`
`npm install`
`npm run start`

# Build Client

`cd web`
`npm install && npm run build:prod`

# Run Go Server

`cd server/`
`STATIC_DIR=../public go run cmd/main.go`

# Build and Deploy

`npm run build`
`DOCKER_HOST="ssh://root@192.168.5.10" docker-compose up -d`