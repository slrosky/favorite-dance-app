const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');

router.get('/', studiosCtrl.index);
router.get('/', studiosCtrl.show);
router.get('/', studiosCtrl.create);

module.exports = router;