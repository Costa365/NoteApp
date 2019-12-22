var express = require('express');
var app = express();
var router = express.Router();
var withAuth = require('./middleware');

//Schema
var Notes = require('../models/Notes');

// Get Specific
router.route('/:id').get(withAuth, function (req, res) {
  var id = req.params.id;
  Notes.findById(id, function (err, item){
      res.json(item);
  });
});

// Get All Items
router.route('/').get(withAuth, function (req, res) {
  var query = { user: req.email };
  Notes.find(query,function (err, items){
    if(err){
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

// Add item
router.route('/add').post(withAuth, function (req, res) {
  var item = new Notes(req.body);
  item["user"] = req.email;
  item.save()
    .then(item => {
      res.json('Added');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route('/update/:id').post(withAuth, function (req, res) {
  Notes.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.desc = req.body.desc;
      item.user = req.email;
      item.save().then(item => {
        res.json('Updated');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

// Delete Specific
router.route('/delete/:id').get(withAuth, function (req, res) {
  Notes.findByIdAndRemove({_id: req.params.id},
      function(err, item){
      if(err) res.json(err);
      else res.json('Deleted');
  });
});

module.exports = router;