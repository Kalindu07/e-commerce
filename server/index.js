const app = require("./app.js");
const connectDB = require("./config/db.js");

// Connect to MongoDB
connectDB();


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 