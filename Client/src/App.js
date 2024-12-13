import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Academics from './components/Academics';
import Placements from './components/Placements';
import Faculty from './components/Faculty';
import Facilities from './components/Facilities';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Aptitude from './components/Aptitude';
import Coding from './components/Coding';
import Technical from './components/Technical';
import AcademicCalendar from './components/AcademicCalendar';
import Students from './components/Students';
import Footer from './components/Footer';
import BOS from './components/BOS';
import HODlogin from './components/HODlogin';
import HODPage from './components/HODPage';
import Login from './Auth/Login';
import SignUp from './components/SignUp';
import AddUpdate from './components/AddUpdate';
import TimeTableManager from './components/TimeTableManager';
import CalendarManager from './components/CalendarManager';
import HODNavbar from './components/HOD_Navbar';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<><Navbar/> <Home/></>}/>

        <Route path="/login" element={<><Navbar/><HODlogin/></>}/>
        <Route path="/register" element={<><Navbar/><SignUp/></>}/>
        <Route path="/hod" element={<><HODNavbar/><HODPage/></>}/>
        <Route path="/hod/updates" element={<><HODNavbar/><AddUpdate/></>}/>
        <Route path="/timeTableManager" element={<><HODNavbar/><TimeTableManager/></>}/>
        <Route path="/calendarManager" element={<><HODNavbar/><CalendarManager/></>}/>

        <Route path="/academics/calendar"  element={<><Navbar/><AcademicCalendar/></>}/>
        <Route path="/academics/timetable"  element={<><Navbar/><Academics/></>}/>
        <Route path="/academics/bos"  element={<><Navbar/><BOS/></>}/>
        <Route path="/academics/students"  element={<><Navbar/><Students/></>}/>

        <Route path="/faculty"  element={<><Navbar/><Faculty/></>}/>

        <Route path="/facilities"  element={<><Navbar/><Facilities/></>}/>

        <Route path="/placements/aptitude"  element={<><Navbar/><Aptitude/></>}/>
        <Route path="/placements/coding"  element={<><Navbar/><Coding/></>}/>
        <Route path="/placements/technical"  element={<><Navbar/><Technical/></>}/>

        <Route path="/contact"  element={<><Navbar/><Contact/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



