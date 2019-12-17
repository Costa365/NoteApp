FROM node:12.2.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon

EXPOSE 6200
CMD [ "npm", "start" ]
