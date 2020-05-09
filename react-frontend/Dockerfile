FROM node:12.2.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./ ./
RUN npm install
RUN npm install -g serve

CMD [ "npm", "start" ]
