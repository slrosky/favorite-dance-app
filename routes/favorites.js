const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites');

router.get('/favorites', isLoggedIn, favoritesCtrl.index);
router.delete('/favorites/studio/:id', isLoggedIn, favoritesCtrl.deleteFavoriteStudio)
router.delete('/favorites/class/:id', isLoggedIn, favoritesCtrl.deleteFavoriteClass)
// router.post('/favorites/:id/bios', isLoggedIn, favoritesCtrl.addBio);
// router.put('/favorites/:id/bios', isLoggedIn, favoritesCtrl.update);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;