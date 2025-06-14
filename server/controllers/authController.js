const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register controller
exports.register = async (req, res) => {
    try {
        console.log('Register request received:', req.body);
        
        // Handle both username and name fields
        const { username, name, email, password } = req.body;
        const userName = username || name; // Use either username or name

        // Validate required fields
        if (!userName || !email || !password) {
            return res.status(400).json({ 
                message: 'Please provide all required fields',
                received: { 
                    name: userName, 
                    email, 
                    password: password ? 'provided' : 'missing' 
                }
            });
        }

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({
            name: userName,
            email,
            password
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user
        await user.save();

        // Create JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ 
            message: 'Server error',
            error: err.message 
        });
    }
};

// Login controller
exports.login = async (req, res) => {
    try {
        console.log('Login request received:', req.body);
        
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ 
                message: 'Please provide both email and password',
                received: { email, password: password ? 'provided' : 'missing' }
            });
        }

        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ 
            message: 'Server error',
            error: err.message 
        });
    }
}; 