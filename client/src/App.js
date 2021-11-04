import { useState } from 'react';
import './App.css';

function App() {
  const [note, setNote] = useState('');
  console.log(note);
  const handleSubmit = (e) => {
    e.preventDefault();
    //do something with new note

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
    </div>
  );
}

export default App;
