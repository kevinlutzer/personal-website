DOCKER_USERNAME ?= klutzer
APPLICATION_NAME ?= 'personal-website:4.0.1'

start-db: 
	docker run --name personal-website-db -e POSTGRES_PASSWORD=password -e POSTGRES_USER=personalwebsite -p 5432:5432 -d postgres

start-web:
	npm --prefix ./web install
	npm --prefix ./web run start

start-server:
	cd server && ENV=local RATE_LIMIT=1000 DB_PASSWORD=password DB_USER=personalwebsite DB_NAME=personalwebsite DB_HOST=localhost DB_PORT=5432 DB_SSL_MODE=disable PORT=8080 STATIC_DIR=../public go run ./cmd/main.go ./cmd/env.go ./cmd/errors.go

build-web:
	npm --prefix ./web install
	npm --prefix ./web run build

build:
	npm --prefix ./web install
	npm --prefix ./web run build
	docker buildx build --push --platform linux/amd64 --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}
 