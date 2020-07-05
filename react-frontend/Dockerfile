FROM node:12.2.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./ ./
RUN npm install
EXPOSE 3000

CMD [ "npm", "start" ]
