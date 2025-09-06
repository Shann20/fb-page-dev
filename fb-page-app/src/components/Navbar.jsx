import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaFacebook } from 'react-icons/fa';
import './styles/Navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><FaHome /> Home</a>
      <a href="/about"><FaInfoCircle /> About</a>
      <a href="/contact"><FaEnvelope /> Contact</a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Facebook
      </a>
    </nav>
  );
};

export default Navbar;