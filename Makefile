DOCKER_USERNAME ?= klutzer
APPLICATION_NAME ?= 'personal-website:latest'

build:
	npm --prefix ./web install
	npm --prefix ./web run build
	docker buildx build --platform linux/arm64 --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}