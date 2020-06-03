const Dancer = require('../models/dancer');
const Studio = require('../models/studio');
const Class = require('../models/class');

module.exports = {
  index
}

function index(req, res) {
    Dancer.find({}, function(err, favorites) {
      res.render('favorites', { title: 'My Favorites', favorites });
    });
  }