import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [note, setNote] = useState('');
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    axios.get('/api/notes').then((res) => {
      const newNotes = [];
      res.data.forEach((data) => {
        newNotes.push(data.note);
      });
      setAllNotes(newNotes);
    });
  }, []);
  console.log(note);
  const handleSubmit = (e) => {
    e.preventDefault();
    //do something with new note
    //make post request to update DB
    axios
      .post('/api/notes', {
        note: note,
      })
      .then((response) => {
        console.log(response);
      });
    setAllNotes((prev) => [...prev, note]);
    //make input fields clear again
  };
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label>New note:</label>
        <textarea
          required
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button>Add note</button>
      </form>
      <div className='noteslist'>
        <h1>all the notes so far:</h1>
        {allNotes.map((anote) => (
          <div>{anote}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
