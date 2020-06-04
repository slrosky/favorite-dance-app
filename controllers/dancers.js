const Dancer = require('../models/dancer');
const Studio = require('../models/studio');
const Class = require('../models/class');

module.exports = {
  index,
  show,
  updateUserStudioFavorites,
  updateUserClassFavorites
};

function index(req, res, next) {
    res.render('dancers/index', { 
      dancers, 
      name: req.query.name, 
      sortKey, 
      user: req.user
  });
}

function show(req, res) {
  req.params.id
  .populate('favoriteStudios').exec(function(err, studio) {
    Studio.find({_id: {$nin: studio.favoriteStudios}})
    .exec(function(err, favoriteStudios) {
      res.render('/favorites', {
        title: 'My Favorites', studio
      });
    });
  });
  Dancer.findById(req.params.id)
  .populate('favoriteClasses').exec(function(err, danceClass) {
    Class.find({_id: {$nin: danceClass.favoriteClasses}})
    .exec(function(err, favoriteClasses) {
      res.render('/favorites', {
        title: 'My Favorites', danceClass
      });
    });
  });
}

function updateUserStudioFavorites(req, res) {
  Studio.findById(req.params.id, function(err, studio) {
    req.user._id (function(err, dancer) {
      if (dancer.favoriteStudios.includes(req.params.id)) {
        console.log('this studio is already favorited')
      } else {
        console.log('this studio is brand new to favorites')
      };
      dancer.favoriteStudios.push(studio);
      dancer.save((err) => {
        res.redirect(`/studios/${req.params.id}`);
      });
    });
  });
}

function updateUserClassFavorites(req, res) {
  Class.findById(req.params.id, function(err, danceclass) {
    req.user._id (function(err, dancer) {
      dancer.favoriteClasses.push(danceclass);
      dancer.save((err) => {
        res.redirect(`/classes/${req.params.id}`);
      });
    });
  });
}
