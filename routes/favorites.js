const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites');

router.get('/favorites', favoritesCtrl.index);

module.exports = router;