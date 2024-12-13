import React, { useRef, useState , useEffect} from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = () => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null)

  const toggleProductsMenu = () => {
    setShowProductsMenu(!showProductsMenu);
    setShowServicesMenu(false);
  };

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
    setShowProductsMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProductsMenu(false);
        setShowServicesMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const clickHandler = () =>{
    navigate("/login");
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">CS Hub</Link>
      </div>

      <div className="menu-container" ref={menuRef}>
        <ul className="menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li className="dropdown">
            <span onClick={toggleProductsMenu}>ACADEMICS</span>
            {showProductsMenu && (
              <ul className="sub-menu">
                <li>
                  <Link to="/academics/calendar">ACADEMIC CALENDAR</Link>
                </li>
                <li>
                  <Link to="/academics/timetable">TIMETABLE</Link>
                </li>
                <li>
                  <Link to="/academics/bos">BOS CUR</Link>
                </li>
                <li>
                  <Link to="/academics/students">STUDENTS</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/faculty">FACULTY</Link>
          </li>
          <li>
            <Link to="/facilities">FACILITIES</Link>
          </li>
          <li className="dropdown">
            <span onClick={toggleServicesMenu}>PLACEMENTS</span>
            {showServicesMenu && (
              <ul className="sub-menu">
                <li>
                  <Link to="/placements/aptitude">APTITUDE</Link>
                </li>
                <li>
                  <Link to="/placements/coding">CODING</Link>
                </li>
                <li>
                  <Link to="/placements/technical">TECHNICAL</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact">CONTACTS</Link>
          </li>
        </ul>
      </div>

      <div>
        <button className="button" onClick={clickHandler} >LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
