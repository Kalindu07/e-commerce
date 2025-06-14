const users = require("../models/Users")

const checkEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        // Check if user already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        next();
    } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
module.exports = checkEmail;