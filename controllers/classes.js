const Class = require('../models/class');
const Studio = require('../models/studio');

module.exports = {
  index,
  show,
  new: addClass,
  create
}

function index(req, res) {
    Class.find({}, function(err, classes) {
      res.render('classes/index', { title: 'All Classes', classes });
    });
  }

  function show(req, res) {
      console.log('hitting')
    Class.findById(req.params.id, function(err, danceClass) {
        res.render('classes/show', { title: 'Class Details', danceClass });
      });
  }
  
  function addClass(req, res) {
    console.log();
    res.render('classes/new', { title: 'Add Class' });
  }
  
  function create(req, res) {
    const danceClass = new Class(req.body);
    danceClass.save(function(err) {
      if (err) return res.redirect('/classes/new');
      res.redirect('/classes');
    });
  }
