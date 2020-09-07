#!/bin/sh

npm install

echo POSTGRES_USERNAME="postgres_username" >> .env
echo POSTGRES_HOST="localhost" >> .env
echo POSTGRES_DATABASE_NAME="postgres_database_name" >> .env
echo POSTGRES_PASSWORD="postgres_password" >> .env
echo POSTGRES_PORT="5432" >> .env