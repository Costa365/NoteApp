const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const withAuth = function(req, res, next) {

  try {
    const token = req.cookies.token;
    
    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.email = decoded.email;
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