import axios from 'axios';
import React, { useState } from 'react';


const Write = () => {

    const send_note = async(e) => {
        e.preventDefault();

        const note_data = {
            title: e.target.title.value,
            note: e.target.note.value
        };
        console.log(note_data);

        axios.post("http://localhost:3000/write", note_data)
        .then((res) =>{
            console.log(res);
        })
        .catch((err) => {
            alert("error creating post");
        })

    }


    return (

        <>
        <h1>Write</h1>
        <form onSubmit={send_note}>
            
            <textarea type = "text" name = "title" placeholder='title'></textarea>
            <textarea type = "text" name = "note" placeholder='note'></textarea>
            <button type= "submit">Submit</button>

        </form>
        </>
    )
}

export default Write;