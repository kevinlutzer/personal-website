FROM golang:alpine

RUN mkdir /app
COPY . /app

WORKDIR /app

ENV DB_CA_PATH = "/etc/ssl/ca/ca-certificate.crt"

RUN go build -o main cmd/main.go 

EXPOSE 8080
ENTRYPOINT [ "/app/main" ]