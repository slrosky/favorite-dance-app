const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');

router.get('/', studiosCtrl.index);
router.get('/:id', studiosCtrl.show);
router.post('/', studiosCtrl.create);
router.post('/:id/classes', isLoggedIn, studiosCtrl.addToRoster);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;