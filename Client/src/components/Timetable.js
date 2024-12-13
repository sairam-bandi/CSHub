import React from 'react';
import '../styling/Timetable.css'

const Timetable = ({data}) => {
  return (
    <div className="academic-calendar">
      <h2 className="calendar-title">{data.batch}</h2>
      <img className="calendar-image" src={data.image} alt="Academic Calendar" />
    </div>
  );
};

export default Timetable;
