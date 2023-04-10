var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const PetController = require('../controllers/PetController');

router.get('/', PetController.list);
router.get('/:id', PetController.read);

router.post('/', PetController.create);

router.put('/:id', PetController.update);

router.delete('/:id', PetController.delete);

module.exports = router;
