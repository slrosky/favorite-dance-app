const Dancer = require('../models/dancer');

module.exports = {
  create,
  update
};

function create(req, res) {
    console.log('hitting create in bio controller')
    Dancer.findById(req.params.id, function(err, user) {
        user.bio = req.body.content;
        user.save ((err) => {
        res.redirect('/favorites');
    });
  });
}
function update(req, res) {
    console.log('hitting create in bio controller')
    Dancer.findById(req.params.id, function(err, user) {
        user.bio = req.body.content;
        user.save ((err) => {
        res.redirect('/favorites');
    });
  });
}
