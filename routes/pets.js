var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const PetController = require('../controllers/PetController');
const UserMiddleware = require('../middlewares/UserMiddleware')

router.get('/', PetController.list);
router.get('/:id', PetController.read);

router.post('/', UserMiddleware.verifyLogin, UserMiddleware.isShelter, PetController.create);

router.put('/:id', UserMiddleware.verifyLogin, UserMiddleware.isShelter, PetController.update);

router.delete('/:id', UserMiddleware.verifyLogin, UserMiddleware.isShelter, PetController.delete);

module.exports = router;
