FROM node:23.3.0-alpine3.20

RUN npm install -g nodemon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

EXPOSE 6200
CMD [ "npm", "start" ]
