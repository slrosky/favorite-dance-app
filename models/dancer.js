const mongoose = require('mongoose');

const bioSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const dancerSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  avatar: String,
  bio: [bioSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Dancer', dancerSchema);