import React, { useState } from "react";

function CreateTextArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

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

    return (
        <div>
            <form>
                <input 
                    name="title" 
                    placeholder="Title" 
                    value={note.title} 
                    onChange={handleChange}
                />
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows="3" 
                    value={note.content} 
                    onChange={handleChange}
                />
                <button onClick={submitHandle}>Add</button>
            </form>
        </div>
    )
}

export default CreateTextArea;