DOCKER_USERNAME ?= klutzer
APPLICATION_NAME ?= 'personal-website:latest'
SERVER_IP ?= 192.168.5.10

build:
	npm --prefix ./web install
	npm --prefix ./web run build
	docker buildx build --platform linux/arm64 --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}

init-deploy:
	DOCKER_HOST="${SERVER_IP}" docker-compose up -d
