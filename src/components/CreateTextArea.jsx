import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateTextArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expand, setExpand] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            }
        });
    }

    function submitHandle(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleExpand(){
        setExpand(true);
    }

    return (
        <div>
            <form className="create-note">
                {expand && 
                (<input 
                    name="title" 
                    placeholder="Title" 
                    value={note.title} 
                    onChange={handleChange}
                />)}
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows= {expand? 3 : 1}
                    value={note.content} 
                    onChange={handleChange}
                    onClick={handleExpand}
                />
                <Zoom in={expand}>
                    <Fab onClick={submitHandle}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateTextArea;