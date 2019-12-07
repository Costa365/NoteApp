Created using [MERN Tutorial](https://medium.com/codebase/series-mern-from-scratch-to-a-robust-solution-1af15204e281)

## Notes

Simple notes application created using Mongodb, Express, ReactJS, NodeJS.

## Backend

npm install express --save
npm install mongoose --save
npm install body-parser --save
npm install cors --save
npm install bcryptjs --save
npm install jsonwebtoken --save
npm install cookie-parser --save

## Frontend

npm install react-router-dom --save
npm install axios --save

## Postman

GET http://localhost:6200/notes
GET http://localhost:6200/user/users
POST http://localhost:6200/user/register
  Body (x-www):
    email : c@c.com
    password : 1234
POST http://localhost:6200/notes/add
  Body (x-www):
    desc : this is a note
