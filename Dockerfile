FROM alpine:latest

COPY server/main /app/server/main
ADD public /app/public

# install /etc/mime.types
RUN apk update && \
    apk add mailcap && \
    rm /var/cache/apk/*
RUN apk add --update shared-mime-info

WORKDIR /app/server

EXPOSE 8080

ENTRYPOINT [ "/app/server/main" ]