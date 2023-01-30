
//authentifications routing 

const express = require('express');
const router = express.Router();
const usersCtrl = require('../Controllers/user')

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;