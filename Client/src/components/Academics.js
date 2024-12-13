import React, { useState } from 'react'
import Timetable from './Timetable'
import '../styling/Academics.css'

const timeTableData = {
  E4: {
    image : "../timeTable/E4.png",
    batch : "E4 - R17 Batch"
  },
  E3: {
    image : "../timeTable/E3.png",
    batch : "E3 - R18 Batch"
  },
  E2: {
    image : "../timeTable/E2.png",
    batch : "E2 - R19 Batch"
  },
  E1: {
    image : "../timeTable/E1.png",
    batch : "E1 - R20 Batch"
  }
}
export default function Academics() {

  const [branch, setBranch] = useState("E1")

  const handleClick = (branch) => {
    setBranch(branch);
    console.log(branch)
  };

  return (
    <div className='time-table'>
      <center> <h2 className='text'>TIME TABLES --- ACADEMIC YEAR 2022-2023</h2> </center>
      <div className='buttons'>
        <button onClick={() => handleClick("E1")}>E1</button>
        <button onClick={() => handleClick("E2")}>E2</button>
        <button onClick={() => handleClick("E3")}>E3</button>
        <button onClick={() => handleClick("E4")}>E4</button>
      </div>
      <Timetable data={timeTableData[branch]}/>

    </div>
  )
}
