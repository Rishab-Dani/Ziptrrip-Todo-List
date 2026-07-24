const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Import Todo Routes
const todoRoutes = require("./routes/todoRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Ziptrrip Todo API is running 🚀"
    });
});

// Register Todo Routes
app.use("/api/todos", todoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});