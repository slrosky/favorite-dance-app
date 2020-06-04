const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites');

router.get('/favorites', favoritesCtrl.index);
router.post('/favorites', favoritesCtrl.create);
router.post('/studios/:id/favorites', performersCtrl.addToStudioFavorites);


module.exports = router;