var express = require('express');
var app = express();
var router = express.Router();
var withAuth = require('./middleware');
const User = require('../models/user');

const createUser = function(user) {
  userObj = {};
  userObj ["username"] = user["username"];
  userObj ["admin"] = user["admin"];
  userObj ["date"] = user["date"];
  userObj ["email"] = user["email"];
  return userObj;
}

// Get Users
router.route('/users').get(withAuth, function (req, res) {
  let isAdmin = false;
  let query = { username: req.username };

  User.find(query)
  .then(function (items) {
    if(items[0].admin == true){
      isAdmin = true;
      User.find({})
      .then(function (items) {
        users = [];
        items.forEach(function (item, index) {
          users.push(createUser(item));
        });
        res.status(200).send(users);
      })
      .catch(function (err) {
        console.log(err);
      });
    }
    else{
      res.status(403).send([]);
    }
  })
  .catch(function (err) {
    console.log(err);
  });
});

// Check if Admin
router.route('/is-admin').get(withAuth, function (req, res) {
  let isAdmin = false;
  let query = { username: req.username };

  User.find(query)
  .then(function (items) {
    isAdmin = items[0].admin;
    res.status(200).send(isAdmin);
  })
  .catch(function (err) {
    console.log(err);
  });
});

module.exports = router;