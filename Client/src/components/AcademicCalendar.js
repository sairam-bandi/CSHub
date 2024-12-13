import React, { useState } from "react";
import '../styling/AcademicCalendar.css'
import '../styling/Timetable.css'
import Timetable from "./Timetable";

const calendars = {
  sem1 : {
    image : "../timeTable/sem1.png",
    batch : "SEM 1"
  },
  sem2 : {
    image : "../timeTable/sem2.png",
    batch : "SEM 2"
  }
}
const AcademicCalendar = () => {
  
  const [sem, setSem] = useState("sem1")
  const handleClick = (sem) => {
    setSem(sem);
    console.log(sem)
  };

  return (
    <div className='time-table'>
      <center> <h2 className='text'>ACADEMIC CALENDARS for YEAR 2022-2023</h2> </center>
      <div className='buttons'>
        <button onClick={() => handleClick("sem1")}>SEM 1</button>
        <button onClick={() => handleClick("sem2")}>SEM 2</button>
      </div>
      <Timetable data={calendars[sem]}/>
    </div>
  )
};
export default AcademicCalendar;
