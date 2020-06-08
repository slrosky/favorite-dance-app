const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');

router.get('/', studiosCtrl.index);
router.get('/:id', studiosCtrl.show);
router.post('/', studiosCtrl.create);
router.post('/:id/classes', studiosCtrl.addToRoster);


module.exports = router;