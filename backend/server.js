const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/feedback', feedbackRoutes);

// Welcome route
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the Event Feedback Management System API!',
  });
});

// Test MySQL connection
db.getConnection()
  .then((connection) => {
    console.log('MySQL connected successfully!');
    connection.release();
  })
  .catch((error) => {
    console.error('MySQL connection failed:', error.message);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});