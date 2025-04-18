# Personal Website

This is my personal website. It is a single page application written in Angular and Go. It is deployed using Docker and Docker Compose. The website is hosted on a Raspberry Pi 4 running Ubuntu Server 20.04 on my local network. Cloudflare Tunnels is used to expose the site to the greater internet. My website can be found [here](https://www.kevin.lutzer.ca)

## Install Just

`curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s -- --to DEST`

## Setup .env file

``` bash
ENV=prod
RATE_LIMIT=1000 
DB_PASSWORD=password 
DB_USER=personalwebsite 
DB_NAME=personalwebsite 
DB_HOST=localhost 
DB_PORT=5432 
DB_SSL_MODE=disable 
PORT=80
```

## Run NPM Server

`just start-web`

## Run Go Server

`just start-db && just start-server`
