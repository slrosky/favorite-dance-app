const Studio = require('../models/studio');

module.exports = {
  index,
  create,
  show
}

function index(req, res) {
    Studio.find({}, function(err, studios) {
      res.render('studios/index', { title: 'All Studios', studios });
    });
  }

  function show(req, res) {
    Studio.findById(req.params.id, function(err, studio) {
        res.render('studios/show', { title: 'Studio Details', studio });
      });
  }

  function create(req, res) {
    const studio = new Studio(req.body);
    studio.save(function(err) {
      if (err) return res.redirect('/studios');
      res.redirect(`/studios/${studio._id}`);
    });
  }
  
  // Studio.create(req.body, function(err, newStudio) {
  //   });