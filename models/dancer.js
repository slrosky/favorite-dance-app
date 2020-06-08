const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dancerSchema = new Schema({
  name: String,
  email: String,
  location: String,
  avatar: String,
  bio: String,
  googleId: String,
  favoriteStudios: [{
    type: Schema.Types.ObjectId,
    ref: 'Studio'
  }],
  favoriteClasses: [{
    type: Schema.Types.ObjectId,
    ref: 'Class'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Dancer', dancerSchema);