
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };




  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
          <img 
  src="kinlogo.jpg" // Replace with your logo path
  alt="KinowAVE Logo" 
  style={{ 
    width: '27px', // Adjust size as needed
    height: '27px', // Maintain aspect ratio
    marginRight: '8px', // Space between logo and text
  }}  />
            <Link to="/" 
             style={{ 
    fontFamily: 'Neuropolitical-Regular', // Use camelCase
    color: '#033956',
    fontSize:'16px',  
    fontWeight: 700,  
  }}   >
 
               KinowAVE

            </Link>
          </div>
          <ul id="menu">
          <li><Link to="/" >Home</Link></li>

            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/products">products</Link>
           
             </li>
            <li><Link to="team">Team</Link>
            
            </li>
            
            <li><Link to="contactus" >Contact</Link></li>
            </ul>
        </div>
      </nav>

      <div className="menuIcon" onClick={toggleMenu}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
        <li>
                    <li><Link to="/"  onClick={toggleMenu} >Home</Link></li>

            <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
            <Link to="/products" onClick={toggleMenu}>products</Link>
           
             </li>
          {/* <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li> */}
          <li><Link to="team" onClick={toggleMenu}>Team</Link></li>
          <li><Link to="contactus" onClick={toggleMenu}>Contact</Link></li>

        </ul>
      </div>
    </>
  );
}
