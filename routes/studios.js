const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');

router.get('/', studiosCtrl.index);
router.post('/', studiosCtrl.create);
router.get('/:id', studiosCtrl.show);

module.exports = router;