FROM nginx:1.15.6
MAINTAINER hzqing

WORKDIR /usr/share/nginx/ui

WORKDIR /etc/nginx/logs

COPY ./dist/ /usr/share/nginx/ui/

RUN  chmod -R 777 /usr/share/nginx/ui

RUN rm -rf /etc/nginx/conf.d/*


COPY nginx.template /etc/nginx/nginx.template

ENV APIIP  112.126.97.236:8080
CMD envsubst '$APIIP' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'


EXPOSE 80
