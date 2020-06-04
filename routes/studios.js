const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');

router.get('/', studiosCtrl.index);
router.get('/:id', studiosCtrl.show);
router.post('/', studiosCtrl.create);

module.exports = router;