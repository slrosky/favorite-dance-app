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
  googleId: String,
  favoriteStudios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studio'
  }],
  favoriteClasses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Dancer', dancerSchema);