const Dancer = require('../models/dancer');
const Studio = require('../models/studio');
// const Class = require('../models/class');

module.exports = {
  index,
  addToStudioFavorites,
  // addToClassFavorites
}

function index(req, res) {
    Dancer.find({}, function(err, favorites) {
      res.render('favorites', { title: 'My Favorites', favorites });
    });
  }

  function addToStudioFavorites(req, res) {
    Studio.findById(req.params.id, function(err, studio) {
      studio.favoriteStudios.push(req.body.studioId);
      studio.save(function(err) {
        res.redirect(`/studios/${studio._id}`);
      });
    });
  }

  // function addToClassFavorites(req, res) {
  //   Class.findById(req.params.id, function(err, classes) {
  //     class.classFavorites.push(req.body.classId);
  //     class.save(function(err) {
  //       res.redirect(`/classes/${class._id}`);
  //     });
  //   });
  // }

