import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './App.css';


class App extends Component {

constructor(props) {
  super(props);
//React state setup
  this.state = {
    notes: [
      {id: 1, noteContent: "note 1........"},
      {id: 2, noteContent: "note 2........"},
      {id: 3, noteContent: "note 3........"},
    ],
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Odalis React App
          </p>
          <div className="notesWrapper">
          <div className="notesHeader">
          <div className="heading">To Do List</div>
    </div>
          <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
              <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />  
              )
            })
          }
      
        </div> 
        <div className="notesFooter">
        <NoteForm /> 
        </div></div> 
       </header> </div> 
    );
  }
}

export default App;

