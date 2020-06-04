const express = require('express');
const router = express.Router();
const classesCtrl = require('../controllers/classes');

router.get('/', classesCtrl.index);
router.get('/:id', classesCtrl.show);
router.post('/', classesCtrl.create);

module.exports = router;