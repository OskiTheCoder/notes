const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  note: String,
});

module.exports = mongoose.model('Note', NoteSchema);
