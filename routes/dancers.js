var express = require('express');
var router = express.Router();
var dancersCtrl = require('../controllers/dancers');
var biosCtrl = require('../controllers/bios');


router.get('/dancers', dancersCtrl.index);
router.post('/dancers/:id', dancersCtrl.create)
router.put('/dancers/:id', dancersCtrl.update)
router.post('/favorites/studio/:id', isLoggedIn, dancersCtrl.addFavoriteStudio)
router.post('/favorites/class/:id', isLoggedIn, dancersCtrl.addFavoriteClass)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
