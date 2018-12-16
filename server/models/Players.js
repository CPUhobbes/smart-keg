const mongoose = require('mongoose');

const { Schema } = mongoose;

const Players = new Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('Players', Players);
