import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Separate CSS for the Header

const Header = () => {
  return (
    <header className="header">
      {/* Professional Website Title */}
      <h1 className="header-title">The Professional Website of Jeff Hunt</h1>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/jeffrey-hunt-4160b7b2"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        <strong>Connect on LinkedIn</strong>
      </a>

      {/* Navigation Links */}
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <span className="separator">|</span>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <span className="separator">|</span>
          <li className="nav-item">
            <Link to="/bio">Bio</Link>
          </li>
          <span className="separator">|</span>
          <li className="nav-item">
            <Link to="/resume">Resume</Link>
          </li>
          <span className="separator">|</span>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <span className="separator">|</span>
          <li className="nav-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
