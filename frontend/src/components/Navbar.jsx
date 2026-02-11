import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/navbar.css";
import"../pages/Project.jsx";
import"../pages/Contact.jsx";

const Navbar = () => {
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo - Clicks back to Home */}
        <Link to="/" className="nav-logo">
          JANHAVI<span className="logo-dot">.</span>DEV
        </Link>

        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              to="/Project" 
              className={`nav-item ${isActive('/Project') ? 'active' : ''}`}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* System Status - Cyberpunk style indicator */}
        <div className="nav-status">
          <span className="status-dot"></span>
          <span className="status-text">ONLINE</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;