#!/bin/sh

npm install

echo NODE_PATH="src/" >> .env
echo REACT_APP_AUTH0_DOMAIN="react_app_auth0_domain" >> .env
echo REACT_APP_AUTH0_CLIENT_ID="react_app_auth0_client_id" >> .env