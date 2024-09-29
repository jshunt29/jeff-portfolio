import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Separate CSS for the Header

// List of teamwork quotes from Team USA swimmers
const quotes = [
  "The only easy day was yesterday. – Michael Phelps",
  "Great things never come from comfort zones. – Katie Ledecky",
  "At the start of each day, I remind myself, my toughest opponent is in the mirror. – Ryan Lochte",
  "I'm not afraid to fail. I'm afraid of not trying. – Ryan Lochte",
  "You can’t put a limit on anything. The more you dream, the farther you get. – Michael Phelps",
  "I think we have the approach that every race is a sprint. Some races are just longer sprints than others. – Katie Ledecky",
  "I think the biggest thing is just to have fun and enjoy the process. – Ryan Lochte"
];

const Header = () => {
  const [quote, setQuote] = useState('');

  // Randomly select a quote when the component mounts
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

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

      {/* Quote Section */}
      <p className="quote">{quote}</p>
    </header>
  );
};

export default Header;
