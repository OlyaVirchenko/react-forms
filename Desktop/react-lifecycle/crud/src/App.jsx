import NoteItem from './components/NoteItem';
import Notes from './components/Note';
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function App() {
  const [notes, setNote] = useState([
    {
      id: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 0,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ])
  axios.get('http://localhost:7070/notes')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

  function addNote(note) {
    note.id = uuidv4();
    setNote([...notes, note])
  }

  function removeNote(id) {
    // удалить на сервере
    fetch(`http://localhost:7070/notes/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
    });
    // удалить локально
    // setNote(notes.filter((note) => note.id !== id))
  }

  return (
    <>
      <Notes notes={notes} removeNote={removeNote}/>
      <NoteItem addNote={addNote}/>
    </>
  )
}

export default App;
