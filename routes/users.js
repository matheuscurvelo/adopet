var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
/* GET users listing. */

router.post('/login', UserController.login);

module.exports = router;
