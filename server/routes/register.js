const express = require('express');
const register = require('../controllers/Register.js');

const router = express.Router();
// Route for user registration

router.post('/register', register.registerUser);
// Export the router    
module.exports = router;