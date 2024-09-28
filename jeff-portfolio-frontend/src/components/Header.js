import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { Button } from '@mui/material';

function Header() {
  const location = useLocation(); // Get current location for active state

  return (
    <header>
      <div className="header-content">
        {/* First line with the text */}
        <h1 className="header-title">The Professional Website of Jeff Hunt</h1>
        {/* Second line with the LinkedIn button */}
        <Button 
          variant="contained" 
          color="primary" 
          href="https://www.linkedin.com/in/jeffrey-hunt-4160b7b2" 
          target="_blank"
          className="linkedin-button"
          sx={{ fontWeight: 'bold' }}
        >
          Visit My LinkedIn
        </Button>
        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <span className="separator">|</span>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <span className="separator">|</span>
            <li className={location.pathname === "/bio" ? "active" : ""}>
              <Link to="/bio">Bio</Link>
            </li>
            <span className="separator">|</span>
            <li className={location.pathname === "/resume" ? "active" : ""}>
              <Link to="/resume">Resume</Link>
            </li>
            <span className="separator">|</span>
            <li className={location.pathname === "/portfolio" ? "active" : ""}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <span className="separator">|</span>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
