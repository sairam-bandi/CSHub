import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styling/HODPage.css'

function HODPage() {
  const location = useLocation();
  
  return (
    <div className='hod-manager'>
      <h1>Welcome {location.state.id}</h1>

      <div className='add-update'>
        <span>Add Updates : </span> <Link to="/hod/updates"><button>Add</button></Link>
      </div>
      <div className='add-update'>
      <span>Update Academic Calendar : </span><Link to="/calendarManager"><button>Add</button></Link>
      </div>
      <div className='add-update'>
      <span>Update Timetable : </span><Link to="/timeTableManager"><button>Add</button></Link>
      </div>

      <div className='logout'>
        <Link to="/login">LOG OUT</Link>
      </div>
    </div>
  );
}

export default HODPage;