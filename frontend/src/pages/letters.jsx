import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';


const Letters = () => {

    const [notes, setnotes] = useState([
        {
            title: "helooo mishaaa",
            note: "this is just a test note",
        }
    ])

    const colors = [
        "#d068d0",
        "#6899d0",
        "#d06868",
        "#68d084",
        "#7468d0",
        "#d08c68",
        "#ced068",
    ]

    useEffect(()=> {

        axios.get("http://localhost:3000/")
        .then((res) =>{
            setnotes(res.data.notes);

        })
        .catch((err) =>{
            alert("error creating letter");
        })

        // setnotes([
        //     {
        //         title: "helooo mishaaa",
        //         note: "this is just note",
        //     }
        // ])
    }, [])

    return (

        <div className='letters'>
            <h1>Letters</h1>
            {/* <h2>{count}</h2>
            <button onClick={() => setcount(count+1)}>Button</button> */}

        {
            notes.map( (n)=> (
                <div className = 'letter' key = {n._id}
                    style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}
                >
                    <p>{n.title}</p>
                    <p>{n.note}</p>
                </div>
            ))
        }

        </div>
    )
}

export default Letters;