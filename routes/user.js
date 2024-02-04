const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
router.post('/signup', userController.signup);
router.post('/login', userController.login);


// Add other routes for CRUD operations as needed

module.exports = router;
