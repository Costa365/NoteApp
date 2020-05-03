const config = require('./config');
const jwt = require('jsonwebtoken');
const withAuth = function(req, res, next) {

  try {
    const token = req.cookies.token;
    
    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      jwt.verify(token, config.SECRET, function(err, decoded) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.username = decoded.username;
          next();
        }
      });
    }
  }
  catch (e) {
    res.status(401).send('Unauthorized: No token provided (exception)');
  }
}

module.exports = withAuth;