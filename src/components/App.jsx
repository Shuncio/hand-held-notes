import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() { // creates App Component
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />  {/* renders Header Component */}
       
      <CreateArea onAdd={addNote} /> {/* renders CreateArea Component */}

      {notes.map((noteItem, index) => {
        {/*  renders Note Component */}
        return (
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />

        );
      })}

      <Footer />  {/* renders Footer Component */}
    </div>
  );
}

export default App;