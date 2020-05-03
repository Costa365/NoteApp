const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const saltRounds = 10;
const tokenLength = 16;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, required: false }
},
{
  collection: 'User'
}
);

UserSchema.pre('save', function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

UserSchema.methods.createToken = function(callback){
  const token = crypto.randomBytes(tokenLength)
    .toString('hex')
    .slice(0, tokenLength);

  const document = this;
  document.token = token;
  document.save();
  
  callback(token);
}

UserSchema.methods.updatePassword = function(password, callback){
  const document = this;
  document.token = undefined;
  document.password = password;
  document.save();
  
  callback(true);
}

module.exports = mongoose.model('User', UserSchema);