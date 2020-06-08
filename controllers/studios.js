const Studio = require('../models/studio');
const Class = require('../models/class');

module.exports = {
  index,
  create,
  addToRoster,
  show
}

function index(req, res) {
    Studio.find({}, function(err, studios) {
      res.render('studios/index', { title: 'All Studios', studios });
    });
  }

  function show(req, res) {
    Studio.findById(req.params.id)
    .populate('roster').exec(function(err, studio) {
        Class.find({})
        .exec(function(err, classes) {
          res.render('studios/show', { title: 'Studio Details', studio, classes
          });
      });
    });
  }

  function addToRoster(req, res) {
    Studio.findById(req.params.id, function (err, studio) {
      studio.roster.push(req.body.danceClassId);
      studio.save(function (err) {
        res.redirect(`/studios/${studio._id}`);
      });
    });
  }

  function create(req, res) {
    const studio = new Studio(req.body);
    studio.save(function(err) {
      if (err) return res.redirect('/studios');
      res.redirect(`/studios/${studio._id}`);
    });
  }
  