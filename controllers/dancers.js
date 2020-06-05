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
  Dancer.findById(req.params.id)
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
    Dancer.findById(req.user._id, function(err, dancer) {
      dancer.favoriteStudios.push(studio);
      dancer.save((err) => {
        res.redirect('/favorites');
      });
    });
  });
}

function updateUserClassFavorites(req, res) {
  console.log('hitting');
  Class.findById(req.params.id, function(err, danceclass) {
    Dancer.findById(req.user._id, function(err, dancer) {
      dancer.favoriteClasses.push(danceclass);
      dancer.save((err) => {
        res.redirect('/favorites');
      });
    });
  });
}
