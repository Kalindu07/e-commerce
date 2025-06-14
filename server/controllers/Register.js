const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        // Check if user already exists
        let user = new User({ name, email, password });
        const existingUser = await User.findOne({
            email: user.email
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        // Save user to database
        await user.save();

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET
        );
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
