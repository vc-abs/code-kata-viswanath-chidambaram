FROM node:14.21.0-alpine

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "npm", "start" ]
