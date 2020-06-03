const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites');

router.get('/', favoritesCtrl.index);