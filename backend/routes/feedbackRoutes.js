const express = require('express');
const db = require('../config/db');

const router = express.Router();

// POST: Submit feedback and save it in MySQL
router.post('/', async (req, res) => {
  try {
    const { name, email, event, rating, comments } = req.body;

    // Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !event?.trim() ||
      rating === undefined ||
      rating === null ||
      rating === '' ||
      !comments?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required feedback fields.',
      });
    }

    // Validate rating
    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be an integer between 1 and 5.',
      });
    }

    // Insert feedback into MySQL
    const sql = `
      INSERT INTO feedback (name, email, event, rating, comments)
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
      name.trim(),
      email.trim(),
      event.trim(),
      numericRating,
      comments.trim(),
    ];

    const [result] = await db.execute(sql, values);

    // Retrieve the newly inserted feedback
    const [rows] = await db.execute(
      'SELECT * FROM feedback WHERE id = ?',
      [result.insertId]
    );

    // Send success response
    return res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully!',
      data: rows[0],
    });
  } catch (error) {
    console.error('Error saving feedback:', error.message);

    return res.status(500).json({
      success: false,
      message: 'Unable to save feedback. Please try again.',
    });
  }
});

// GET: Retrieve all feedback from MySQL
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM feedback ORDER BY created_at DESC'
    );

    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching feedback:', error.message);

    return res.status(500).json({
      success: false,
      message: 'Unable to fetch feedback.',
    });
  }
});

module.exports = router;
