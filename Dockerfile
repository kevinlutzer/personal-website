FROM golang:alpine

RUN mkdir /app
COPY . /app

WORKDIR /app

RUN go build -o main cmd/main.go 

EXPOSE 8080
ENTRYPOINT [ "/app/main" ]