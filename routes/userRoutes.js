const express = require('express');
const { loginController, registerController } = require('../controllers/userCtrl');

// router objects

const router = express.Router();

//routes
//Login - Post
router.post('/login', loginController);

//Register - Post
router.post('/register', registerController);

module.exports = router;