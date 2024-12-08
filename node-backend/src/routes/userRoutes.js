const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./config');
const withAuth = require('./middleware');
const User = require('../models/user');
const Email = require('../services/email');


router.route('/checkToken').get(withAuth, function (req, res) {
  res.sendStatus(200);
});

// Register a user
router.route('/register').post(function (req, res) {
  const { username, email, password } = req.body;
  const user = new User({ username:username, email:email, 
    password:password, admin:false, date:Date.now() });

  user.save(query)
  .then(function () {
    console.log('Register ' + user.email);
    res.status(200).send("Welcome to the club!");
    Email.sendWelcomeMail(email, username);
  })
  .catch(function (err) {
    console.log (err);
    res.status(500)
      .send("Error registering new user please try again.");
  });
});

router.route('/login').post(function (req, res) {
  const { username, password } = req.body;


  User.findOne({ username: username })
  .then(function (user) {
    if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect username or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect username or password'
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, config.SECRET, {
            expiresIn: '12h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  })
  .catch(function (err) {
    console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
  });

});

router.route('/logout').post(withAuth, function (req, res) {
  res.clearCookie('token')
  return res.status(200).send(); 
});

router.route('/forgot').post(function (req, res) {
  const { email } = req.body;
  User.findOne({ email })
  .then(function (user) {
    console.log('Password forgot for ' + user.email);
    user.createToken(function(token) {        
      res.status(200).send("OK"); 
      Email.sendResetMail(email, token);
    });
  })
  .catch(function (err) {
    console.error(err);
    res.status(500)
      .json({
      error: 'Internal error please try again'
    });
  });

});

router.route('/reset').post(function (req, res) {
  const { token, password } = req.body;
  User.findOne({ token: token })
  .then(function (user) {
    if (!user) {
      res.status(401)
        .json({
          error: 'Invalid token - please try again'
        });
    } else {
      console.log('Password reset for ' + user.email);
      user.updatePassword(password, function(token) {
        res.status(200).send("OK"); 
      });
    }
  })
  .catch(function (err) {
    console.error(err);
    res.status(500)
      .json({
      error: 'Internal error please try again'
    });
  });
});
  

module.exports = router;