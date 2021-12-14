#!/bin/bash
source env.sh

docker-compose build
docker-compose up -d
docker exec -it postgres_db_api psql "host=${DATABASE_HOST} port=${DATABASE_PORT} dbname=${DATABASE_NAME} user=${DATABASE_USERNAME} password=${DATABASE_PASSWORD}" -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
docker-compose run api /bin/sh -c "yarn migrate:latest"

docker exec -it postgres_db_api psql "host=localhost port=5432 dbname=challenge user=postgres password=docker" -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
