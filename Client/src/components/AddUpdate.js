import React from "react";
import { useState } from "react";
import '../styling/AddUpdate.css'
import axios from "axios";

export default function AddUpdate(){
    const [update, setUpdate] = useState("");
    const [msg, setMsg] = useState("")

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/hod/updates",{text:update})
            .then(
                setMsg("Update added successfully")
            )
            .catch((e) => {
                console.log(e)
            })
      
        } 
        catch (error) {
            console.log("error");
        }
        let tex = document.getElementById("text")
        tex.value=""
    }

    return(
    <div className="addUpdate">
    <h2>ADD NEW UPDATE</h2>
    <form action="POST" className='form' onSubmit={handleFormSubmit}>
        <input type='text' id="text" placeholder='Enter Update' onChange={(e) => {setUpdate(e.target.value)}}/>
        <button type="submit" >ADD</button>
    </form>

    <div className="complete-message">
    {msg && <p>{msg}</p>}
    </div>

    </div>
    );
}