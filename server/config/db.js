const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://kalindulakshanhh:fRiYeXChwtVWqvVv@cluster0.lwnfoeb.mongodb.net/job-portal?retryWrites=true&w=majority");
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};
module.exports = connectDB;