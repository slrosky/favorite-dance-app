const Dancer = require('../models/dancer');
const Studio = require('../models/studio');


module.exports = {
  index,
  deleteFavoriteStudio
};

function index(req, res) {
  req.user._id.populate('favoriteStudios favoriteClasses').exec(function(err, currentUser) {
    res.render('favorites', { title: 'My Favorites', user: currentUser });
  })
}


function deleteFavoriteStudio (req, res) {
  Studio.findById(req.params.id, function(err, studio) {
      req.user.favoriteStudios.remove(studio);
      req.user.save((err) => {
        res.redirect(`/studios/${req.params.id}`);
      });
    });
  };
