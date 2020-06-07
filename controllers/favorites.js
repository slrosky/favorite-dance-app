const Dancer = require('../models/dancer');
const Studio = require('../models/studio');
const Class = require('../models/class');


module.exports = {
  index,
  deleteFavoriteStudio,
  deleteFavoriteClass
};

function index(req, res) {
  Dancer.findById(req.user._id).populate('favoriteStudios favoriteClasses').exec(function(err, currentUser) {
    res.render('favorites', { title: 'My Favorites', user: currentUser });
  })
}


function deleteFavoriteStudio (req, res) {
  Studio.findById(req.params.id, function(err, studio) {
      req.user.favoriteStudios.remove(studio);
      req.user.save((err) => {
        res.redirect('/favorites');
      });
    });
  };

function deleteFavoriteClass (req, res) {
  Class.findById(req.params.id, function(err, danceClass) {
    console.log(danceClass)
      req.user.favoriteClasses.remove(danceClass);
      req.user.save((err) => {
        res.redirect('/favorites');
      });
    });
  };
