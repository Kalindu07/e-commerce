const express = require('express');
const router = express.Router();
const multer = require('multer');
const { register, login } = require('../controllers/authController');

// Configure multer
const upload = multer();

// Register route
router.post('/register', upload.none(), register);

// Login route
router.post('/login', upload.none(), login);

module.exports = router; 