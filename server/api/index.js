// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET Request
router.get('/notes', async (req, res) => {
  const allNotes = await Note.find();
  console.log(allNotes);

  // Content that will be sent will be a prettified json
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(allNotes, null, 4));
});

// POST Request
router.post('/notes', async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    console.log(newNote);
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify({ sent: 'note got sent' }, null, 4));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
