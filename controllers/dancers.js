const Dancer = require('../models/dancer');

module.exports = {
  index,
  show
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
  .populate('favoritesStudios').exec(function(err, studio) {
    // Performer.find({}).where('_id').nin(movie.cast)
    Studio.find({_id: {$nin: studio.favoritesStudios}})
    .exec(function(err, favoritesStudios) {
      res.render('/favorites', {
        title: 'My Favorites', studio
      });
    });
  });
}
