const Dancer = require('../models/dancer');

module.exports = {
  index,
};

function index(req, res, next) {
    res.render('dancers/index', { 
      dancers, 
      name: req.query.name, 
      sortKey, 
      user: req.user
  });
}
