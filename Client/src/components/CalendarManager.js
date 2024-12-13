import { useEffect } from "react";
import '../styling/PostData.css'

export default function CalendarManager(){
    useEffect(()=>{
        let form=document.getElementById("form");
        form.onsubmit=async function(event){
            event.preventDefault();
            let formData=new FormData(form)
            let ret=await fetch("http://localhost:5000/calendarManager",{method:"post","body":formData})
            let res=await ret.json()
            console.log(res)
        }
    })
    return (
        <div className="manager">
            <h1>Update Academic Calendar</h1>
            <form  id="form" method="post" encType="multipart/form-data">
                <span>Select Semester:</span>
                <select name="sem">
                    <option value="sem1">SEM 1</option>
                    <option value="sem2">SEM 2</option>
                </select> <br/>
                <span>Select File: </span>
                <input type="file" name="file"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}