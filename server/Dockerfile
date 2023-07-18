FROM golang:alpine

RUN mkdir /app

# Copy the go specific files
COPY cmd /app
COPY pkg /app
COPY vendor /app
COPY go.mod /app
COPY go.sum /app

WORKDIR /app

ENV DB_CA_PATH = "/etc/ssl/ca/ca-certificate.crt"

RUN go build -o main cmd/main.go 

EXPOSE 8080
ENTRYPOINT [ "/app/main" ]