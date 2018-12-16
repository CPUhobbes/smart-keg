const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema({
  __id: String,
  username: String,
  password: String,
  admin: Boolean,
});

module.exports = mongoose.model('Users', Users);
