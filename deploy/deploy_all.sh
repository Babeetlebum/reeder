#!/bin/bash

docker network create reverseproxy_default
docker network create back_default

cat `find ./* -maxdepth 1 -iname ".env"` | sort | uniq > .env

docker-compose \
    -f reverseproxy/docker-compose.yml \
    -f db/docker-compose.yml \
    -f api/docker-compose.yml \
    -f app/docker-compose.yml \
    up --build
