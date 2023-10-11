# Personal Website

This is my personal website. It is a single page application written in Angular and Go. It is deployed using Docker and Docker Compose. The website is hosted on a Raspberry Pi 4 running Ubuntu Server 20.04 on my local network. Cloudflare Tunnels is used to expose the site to the greater internet. My website can be found here: https://www.kevinlutzer.ca

# Run NPM Server

`cd web`
`npm install`
`npm run start`

# Run Go Server

To run the server locally, you must first build the Angular app using `npm run build`. 

`cd server/`
`STATIC_DIR=../public go run cmd/main.go`

# Build and Deploy

`make build`
`make push`
`make init-deploy`