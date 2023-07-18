FROM golang:alpine

RUN mkdir -p /usr/local/go/src/

ENV DB_CA_PATH = "/etc/ssl/ca/ca-certificate.crt"

# Copy the go specific files
COPY * /usr/local/go/src/
WORKDIR /usr/local/go/src/
RUN go build -mod=mod -o main cmd/main.go 

# expose ports for https and http traffic
EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "/app/main" ]