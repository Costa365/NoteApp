## Notes

Simple notes application created using Mongodb, Express, ReactJS, NodeJS. User can create an account and notes are encrypted. Emails are also sent to confirm registration and to reset password. 

App can be used at [Notes365](https://notes365.costa365.site).

### Run

Docker and Docker-compose should be installed on the system. Create a .env file and required environment variables as described in Backend section below.

```console
docker-compose up
```

Application can now be accessed at http://localhost:3000


### Development

These are the steps I followed to create the application before running in Docker.

#### Backend

```console
npm install express --save
npm install mongoose --save
npm install mongoose-encryption --save
npm install body-parser --save
npm install cors --save
npm install bcryptjs --save
npm install jsonwebtoken --save
npm install cookie-parser --save
npm install sweetalert2 --save
npm install nodemailer --save
```

Create \node-backend\.env and add the following environment variables:
```console
NOTES_ENC_KEY=<generate encryption key using openssl rand -base64 32>
NOTES_SIG_KEY=<generate encryption key using openssl rand -base64 64>
EMAIL_USER=<Email address that notification emails will be sent from>
EMAIL_PASSWORD=<Email account password>
NOTES_SECRET=<Secret string used for json web token>
```

*I was able to get emails working with a Yahoo email account with support for less secure apps enabled.*

To install additional packages, log into docker container and run npm commands.

#### Frontend

```console
npm install react-router-dom --save
npm install axios --save
```

To install additional packages, log into docker container and run npm commands.

#### Postman

```console
GET http://localhost:6200/notes
GET http://localhost:6200/user/users
POST http://localhost:6200/user/register
  Body (x-www):
    email : c@c.com
    password : 1234
POST http://localhost:6200/notes/add
  Body (x-www):
    desc : this is a note
```

#### Mongodb

```console
docker exec -it <container-id> /bin/bash
```
```console
mongosh
use test
db.Notes.find();
db.Notes.remove({});
db.User.update({ username: "costa" },{$set: {admin: true}})
```

### References

- Created using [MERN Tutorial](https://medium.com/codebase/series-mern-from-scratch-to-a-robust-solution-1af15204e281)
- [JWT Tutorial](https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0#4010)
- [Bootstrap theme](https://bootswatch.com/3/cerulean)
