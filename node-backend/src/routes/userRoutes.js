var express = require('express');
var app = express();
var router = express.Router();

//Schema
var User = require('../models/User');

// Get All Items
router.route('/users').get(function (req, res) {
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

module.exports = router;