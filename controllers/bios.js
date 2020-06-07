const Dancer = require('../models/dancer');

module.exports = {
  create
};

function create(req, res) {
    Dancer.findById(req.params.id, function(err, bio) {
        req.user.bio.create(req.params.id);
        req.user.save((err) => {
        res.redirect(`/favorites/${req.params.id}`);
    });
  });
}
