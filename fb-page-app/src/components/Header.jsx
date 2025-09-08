import React from 'react';
import { FaHome, FaUserFriends, FaBell, FaEnvelope, FaBars, FaArrowLeft} from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <img src="./profile.jpg" alt="Profile" className="profile-picture" />
      <div className="profile-logo-name">Mier, Santos Jr.</div>
      <div className="header-icons">
        <FaHome className="header-icon" />
        <FaUserFriends className="header-icon" />
        <FaBell className="header-icon" />
        <FaEnvelope className="header-icon" />
        <FaBars className="header-icon" title="Menu" />
      </div>
    </div>
  );
}

export default Header;
