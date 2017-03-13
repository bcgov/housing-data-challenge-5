FROM node:7

WORKDIR /var/www

CMD yarn install && yarn run build