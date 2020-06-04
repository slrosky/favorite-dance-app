const Dancer = require('../models/dancer');
const Studio = require('../models/studio');

module.exports = {
  index,
  show,
  updateUserStudioFavorites
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
    .exec(function(err, favoritesStudios) {
      res.render('/favorites', {
        title: 'My Favorites', studio
      });
    });
  });
}

function updateUserStudioFavorites(req, res) {
  console.log(req.params.id);
  Studio.findById(req.params.id, function(err, studio) {
    console.log(studio);
    Dancer.findById(req.user._id, function(err, dancer) {
      console.log(dancer)
      dancer.favoriteStudios.push(studio)
      dancer.save((err) => {
        res.redirect(`/studios/${req.params.id}`);
      })
    })
  });
}