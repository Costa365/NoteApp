var express = require('express');
var app = express();
var router = express.Router();
var withAuth = require('./middleware');

//Schema
var Notes = require('../models/notes');

// Get Specific
router.route('/:id').get(withAuth, function (req, res) {
  var id = req.params.id;
  Notes.findById(id)
  .then(function (item) {
    res.json(item);
  })
  .catch(function (err) {
    console.log(err);
  });
});

// Get All Items
router.route('/').get(withAuth, function (req, res) {
  var query = { user: req.username };

  Notes.find(query)
  .then(function (items) {
    res.json(items);
  })
  .catch(function (err) {
    console.log(err);
  });

});

// Add item
router.route('/add').post(withAuth, function (req, res) {
  var item = new Notes(req.body);
  item["user"] = req.username;
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


  Notes.findById(req.params.id)
  .then(function (item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.desc = req.body.desc;
      item.user = req.username;
      item.save().then(item => {
        res.json('Updated');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  })
  .catch(function (err) {
    console.log(err);
  });
});

// Delete Specific
router.route('/delete/:id').get(withAuth, function (req, res) {
  Notes.findByIdAndDelete({_id: req.params.id})
  .then(function (item) {
    res.json('Deleted');
  })
  .catch(function (err) {
    console.log(err);
  });
});

module.exports = router;