import React from 'react';
import { MdBarChart, MdAdd, MdMoreHoriz, } from 'react-icons/md';
import '../styles/ProfileHeader.css';
import { FaCamera, FaCrown } from 'react-icons/fa';

const users = [
  './banban.jpg',
  './melca.jpg',
  './myka.jpg',
  './mark.jpg',
  './sala.jpg',
  './saulon.jpg',
  './sedrik.jpg',
  './cherlyn.jpg'
];

function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="cover-photo">
        <img src="./profile-cover.jpg" alt="Cover" />
        <div className="active-status"></div>
      </div>
      
      <div className="profile-content">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src="./profile.jpg" alt="Profile" />
          <div className="active-status"><FaCamera style={{ marginTop: "8px", cursor: "pointer"}}/></div>
        </div>
         <div className="profile-name">
          <h2>Mier, Santos Jr. (Ks KS)</h2>
        </div>
         {/* ✅ Add this followers/following line */}
        <div className="followers-following">
          <span className="followers">3.7K followers</span>
          <span className="dot"> ● </span>
          <span className="following">860 following</span>
        </div>
        <div className="followers-grid">
          {users.map((img, index) => (
            <img key={index} src={img} alt={`User ${index}`} className="follower-avatar" />
          ))}
          <div className="follower-more">...</div>
        </div>
        <div className="profile-button">
          <button className="professional-button">
            <MdBarChart />Professional dashboard
          </button>
          <button className="edit-button">
            <MdAdd />Add to Story
          </button>
          <button className="dot-button">
            <MdMoreHoriz />
          </button>
        </div>
    </div>
    </div>
  );
}

export default ProfileHeader;
