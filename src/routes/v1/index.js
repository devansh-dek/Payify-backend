const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController.js')

router.post('/user', UserController.create);


module.exports = router;