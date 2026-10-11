
const express = require('express');

const router = express.Router();

let feedbackList = [];
let nextId = 1;

// Submit feedback
router.post('/', (req, res) => {
  const { name, email, event, rating, comments } = req.body;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !event ||
    !rating ||
    !comments?.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required feedback fields.',
    });
  }

  const feedback = {
    id: nextId++,
    name: name.trim(),
    email: email.trim(),
    event,
    rating: Number(rating),
    comments: comments.trim(),
    createdAt: new Date().toISOString(),
  };

  feedbackList.push(feedback);

  res.status(201).json({
    success: true,
    message: 'Feedback submitted successfully!',
    data: feedback,
  });
});

// Get all feedback
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: feedbackList.length,
    data: feedbackList,
  });
});

module.exports = router;
