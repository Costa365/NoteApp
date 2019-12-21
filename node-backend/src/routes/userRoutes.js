const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const withAuth = require('./middleware');
const User = require('../models/User');


router.route('/secret').get(withAuth, function (req, res) {
  res.send('The password is potato');
});

router.route('/checkToken').get(withAuth, function (req, res) {
  res.sendStatus(200);
});

// Get All Items
router.route('/users').get(withAuth, function (req, res) {
  User.find(function (err, items){
    if(err){
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

// Register a user
router.route('/register').post(function (req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });

  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.route('/login').post(function (req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
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
              error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

router.route('/logout').post(withAuth, function (req, res) {
  res.clearCookie('token')
  return res.status(200).send(); 
});
  

module.exports = router;