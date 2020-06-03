const Favorite = require('../models/favorite');
const Studio = require('../models/studio');
const Class = require('../models/class');

module.exports = {
  index
}

function index(req, res) {
    Favorite.find({}, function(err, studios) {
      res.render('favorites/index', { title: 'My Favorites', favorites });
    });
  }