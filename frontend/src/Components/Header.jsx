import React, { useState } from "react";
import "./Header.css"; // We'll create corresponding CSS

function Header() {
  const [navActive, setNavActive] = useState(false);

  const handleToggle = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = () => {
    setNavActive(false);
  };

  return (
    <header className="header">
        <div className="Container">
            <nav className="navbar">
                <a href="#" className="logo">
                    <img src ="./src/assets/website logo.jpg"/>
                </a>
                 <ul className={`nav-links ${navActive ? "active" : ""}`}>
                    <li>
                        <a href="#home" onClick={handleLinkClick}>
                             Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={handleLinkClick}>
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={handleLinkClick}>
                        Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleLinkClick}>
                        Contact
                        </a>
                    </li>
                </ul>
                <div className={`hamburger ${navActive ? "active" : ""}`}onClick={handleToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </div>









        
      
    </header>
  );
}

export default Header;
