// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

// GET Request
router.get('/notes', async (req, res) => {
  const notes = {
    first: 'my first note',
    second: 'my second note',
  };

  // Content that will be sent will be a prettified json
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(notes, null, 4));
});

// POST Request
router.post('/notes', async (req, res) => {
  const notes = {
    first: 'my first note',
    second: 'my second note',
  };

  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(notes, null, 4));
});

module.exports = router;
