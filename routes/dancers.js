var express = require('express');
var router = express.Router();
var dancersCtrl = require('../controllers/dancers');

router.get('/dancers', dancersCtrl.index);

module.exports = router;
