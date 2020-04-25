const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encrypt = require('mongoose-encryption');

var Notes = new Schema({
  desc: { type: String },
  user: { type: String, required: true }
},{
    collection: 'Notes'
});

const encKey = process.env.NOTES_ENC_KEY;
const sigKey = process.env.NOTES_SIG_KEY;

Notes.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, excludeFromEncryption: ['user'] });

module.exports = mongoose.model('Notes', Notes);