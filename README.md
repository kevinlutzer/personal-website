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
`STATIC_DIR=../public DB_CA_PATH=cmd/ca-certificate.crt go run cmd/main.go`

# Build and Deploy

There is a hook on the `klutzer-personal-website` DO registry that will take the newest image and load that as the main app container.  

`docker buildx build --platform linux/arm64 -t registry.digitalocean.com/klutzer-personal-website/klutzer-personal-website:latest --push .`