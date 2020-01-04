FROM node:12.2.0-alpine

RUN npm install -g nodemon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

EXPOSE 6200
CMD [ "npm", "start" ]
