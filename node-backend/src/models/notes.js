var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var Notes = new Schema({
  desc: {
    type: String
  },

},{
    collection: 'Notes'
});

module.exports = mongoose.model('Notes', Notes);