var express = require('express');
var router = express.Router();
var dancersCtrl = require('../controllers/dancers');

router.get('/dancers', dancersCtrl.index);
router.post('/favorites/studio/:id', dancersCtrl.updateUserStudioFavorites)
router.post('/favorites/class/:id', dancersCtrl.updateUserClassFavorites)


module.exports = router;
