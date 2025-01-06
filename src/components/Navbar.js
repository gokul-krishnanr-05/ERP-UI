import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="https://play-lh.googleusercontent.com/QfA_aFiU6keGtKn2qeT5CWJHCK_28sYABK_SfW-Ig210jkO0Q7IH8M1Z-wZItPJC9A" alt="Icon" className="navbar-icon" />
        <span className="navbar-name">Olivia Miller</span>
      </div>

      <input type="text" placeholder="Search Dashboard..." className="search-bar" />

      <div className="company">
        <span className="company-text">Switch Company</span>
        <div className="company-box" onClick={toggleMenu}>
          <span className="selected-company">Olivia</span>
          <span className="dropdown-arrow">&#9660;</span>
        </div>

        {isMenuOpen && (
          <ul className="dropdown-list">
            <li key="Company A" className="dropdown-item">Olivia</li>
            <li key="Company B" className="dropdown-item">Axon</li>
            <li key="Company C" className="dropdown-item">Dreno</li>
          </ul>
        )}
      </div>

      <div className="navbar-user">
        <span>Welcome back, Gokul!</span>
        <img src="https://wallpapers.com/images/hd/professional-user-avatar-icon-c2dso2qdpbn4t0es.png" alt="User" className="user-avatar" />
      </div>
    </div>
  );
};

export default Navbar;
