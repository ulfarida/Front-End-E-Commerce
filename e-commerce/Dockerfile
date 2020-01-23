FROM nginx:stable
MAINTAINER Farida Ulfah  "ulfah@alterra.id"

RUN mkdir -p /var/www/frontend
RUN mkdir -p /var/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /var/www/frontend

WORKDIR /var/www/frontend
