import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateTextArea from './CreateTextArea';
import { useState } from "react";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes((notes) => [...notes, note]);
    }

    function deleteNote(id){
        setNotes((notes) => {
            return notes.filter((note, index) => index !== id);
        });
    }

    return(
        <div>
            <Header />
            <CreateTextArea 
                onAdd={addNote}
            />
            {notes.map((note, index) => 
                <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            )}
            <Footer />
        </div>
    )
}

export default App;