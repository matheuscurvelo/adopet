var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const AdoptionController = require('../controllers/AdoptionController');

// router.get('/', AdoptionController.list);
// router.get('/:id', AdoptionController.read);

router.post('/', AdoptionController.create);

router.put('/:id', AdoptionController.update);

router.delete('/:id', AdoptionController.delete);

module.exports = router;
