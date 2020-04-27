## Notes

Simple notes application created using Mongodb, Express, ReactJS, NodeJS.

### Run

Docker and Docker-compose should be installed on the system. Create NOTES_ENC_KEY, NOTES_SIG_KEY, EMAIL_USER and EMAIL_PASSWORD environment variables as described in Backend section below.

```console
docker-compose up
```

Application can now be access on http://localhost:3000

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

Generate pair of keys for encyption and assign to environment variables
```console
NOTES_ENC_KEY = openssl rand -base64 32
NOTES_SIG_KEY = openssl rand -base64 64
```

Create environment variables for gmail account which will be used. Access for less secure apps shopuld be enabled.
```console
EMAIL_USER=xxx@gmail.com
EMAIL_PASSWORD=xxxxxx
```

#### Frontend

```console
npm install react-router-dom --save
npm install axios --save
```

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
mongo
use test
db.Notes.find();
db.Notes.remove({});
```

### References

- Created using [MERN Tutorial](https://medium.com/codebase/series-mern-from-scratch-to-a-robust-solution-1af15204e281)
- [JWT Tutorial](https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0#4010)
- [Bootstrap theme](https://bootswatch.com/3/cerulean)
