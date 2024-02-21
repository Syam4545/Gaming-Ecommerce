const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
  username: { type: String, unique: true },
  password:{type:String},
  email: {type:String},
  address: {type:String}
});

module.exports = mongoose.model('USER', UserSchema);
