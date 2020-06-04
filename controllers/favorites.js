const Dancer = require('../models/dancer');
const Studio = require('../models/studio');
// const Class = require('../models/class');

module.exports = {
  index
}

function index(req, res) {
  Dancer.findById(req.user._id).populate('favoriteStudios favoriteClasses').exec(function(err, currentUser) {
    res.render('favorites', { title: 'My Favorites', user: currentUser });
  })
}

  // function addToClassFavorites(req, res) {
  //   Class.findById(req.params.id, function(err, classes) {
  //     class.classFavorites.push(req.body.classId);
  //     class.save(function(err) {
  //       res.redirect(`/classes/${class._id}`);
  //     });
  //   });
  // }

