DOCKER_USERNAME ?= klutzer
APPLICATION_NAME ?= 'personal-website:4.0.1'

build:
	npm --prefix ./web install
	npm --prefix ./web run build
	docker buildx build --push --platform linux/amd64 --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}
 