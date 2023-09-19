FROM golang:alpine

ADD server /app/server
ADD public /app/public

# install /etc/mime.types
RUN apk update && \
    apk add mailcap && \
    rm /var/cache/apk/*
RUN apk add --update shared-mime-info

ENV STATIC_DIR "/app/public"

WORKDIR /app/server

RUN go build -o main cmd/main.go 
EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "/app/server/main" ]