const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites');

router.get('/favorites', favoritesCtrl.index);
router.delete('/favorites/studio/:id', favoritesCtrl.deleteFavoriteStudio)
// router.post('/favorites', favoritesCtrl.create);
// router.post('/studios/:id/favorites', isLoggedIn, favoritesCtrl.addToStudioFavorites);


module.exports = router;