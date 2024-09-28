import React from 'react';

// Array of favorite quotes
const quotes = [
  "You can't put a limit on anything. The more you dream, the farther you get. – Michael Phelps",
  "The only easy day was yesterday. – Michael Phelps",
  "Great things never come from comfort zones. – Katie Ledecky",
  "At the start of each day, I remind myself, my toughest opponent is in the mirror. – Ryan Lochte",
  "I'm not afraid to fail. I'm afraid of not trying. – Ryan Lochte",
  "I've learned that it's okay to not be perfect. – Missy Franklin",
  "I've learned that it's okay to be different. – Simone Manuel",
  "Great things never come from comfort zones. – Penny Oleksiak",
  "I'm always looking for ways to improve. – Caeleb Dressel",
  "I love the challenge of swimming. – Nathan Adrian",
];

// Function to get a random quote
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Footer = () => {
  const quote = getRandomQuote();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{quote}</p>
      </div>
    </footer>
  );
};

export default Footer;
