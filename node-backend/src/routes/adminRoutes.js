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
  return userObj;
}

// Get Users
router.route('/users').get(withAuth, function (req, res) {
  let isAdmin = false;
  let query = { username: req.username };
  User.find(query,function (err, items){
    if(err){
      console.log(err);
    } else {
      if(items[0].admin == true){
        isAdmin = true;
        User.find({},function (err, items){
          users = [];
          items.forEach(function (item, index) {
            users.push(createUser(item));
          });
          res.status(200).send(users);
        });
      }
      else{
        res.status(403).send([]);
      }
    }
  });
});

module.exports = router;