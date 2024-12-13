import {useEffect} from "react"
import '../styling/PostData.css'

export default function TimeTableManager(){
    useEffect(()=>{
        let form=document.getElementById("form");
        form.onsubmit=async function(event){
            event.preventDefault();
            let formData=new FormData(form)
            let ret=await fetch("http://localhost:5000/timeTableManager",{method:"post","body":formData})
            let res=await ret.json()
            console.log(res)
        }
    })
    return (
        <div className="manager">
            <h1>Update TimeTable</h1>
            <form  id="form" method="post" enctype="multipart/form-data">
                Select year:<br/>
                <select name="year">
                    <option value="E1">E1</option>
                    <option value="E2">E2</option>
                    <option value="E3">E3</option>
                    <option value="E4">E4</option>
                </select>
                Select File:<br/>
                <input type="file" name="file"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}