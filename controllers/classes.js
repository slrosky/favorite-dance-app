const Class = require('../models/class');

module.exports = {
  index,
  show,
  create
}

function index(req, res) {
    Class.find({}, function(err, classes) {
      res.render('classes/index', { title: 'All Classes', classes });
    });
  }

  function show(req, res) {
    Class.findById(req.params.id, function(err, danceClass) {
        res.render('classes/show', { title: 'Class Details', danceClass });
      });
  }

  function create(req, res) {
    const danceClass = new Class(req.body);
    danceClass.save(function(err) {
      if (err) return res.redirect('/classes');
      res.redirect(`/classes/${danceClass._id}`);
    });
  }