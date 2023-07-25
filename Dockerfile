FROM golang:alpine

RUN mkdir /app
COPY . /app

WORKDIR /app/server

ENV DB_CA_PATH = "/etc/ssl/ca/ca-certificate.crt"

RUN go build -o main cmd/main.go 

EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "/app/server/main" ]