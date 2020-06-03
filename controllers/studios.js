const Studio = require('../models/studio');
const Class = require('../models/class');

module.exports = {
  index,
  create,
  // show,
}

function index(req, res) {
    Studio.find({}, function(err, studios) {
      res.render('studios/index', { title: 'All Studios', studios });
    });
  }

  // function show(req, res) {
  //   Studio.findById(req.params.id)
  //   .populate('classes').exec(function(err, studio) {
  //     Class.find({_id: {$nin: studio.classes}})
  //     .exec(function(err, classes) {
  //       res.render('studios/show', {
  //         title: 'Studio Details', studio, classes
  //       });
  //     });
  //   });
  // }

  function create(req, res) {
    const studio = new Studio(req.body);
    studio.save(function(err) {
      if (err) return res.redirect('/studios');
      res.redirect(`/studios/${studio._id}`);
    });
  }
  
  // Studio.create(req.body, function(err, newStudio) {
  //   });