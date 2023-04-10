var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const ShelterController = require('../controllers/ShelterController');

router.get('/', ShelterController.list);
router.get('/:id', ShelterController.read);

router.post('/', ShelterController.create);

router.put('/:id', ShelterController.update);

router.delete('/:id', ShelterController.delete);

module.exports = router;
