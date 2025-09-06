import React from 'react';
import '../styles/ProfileHeader.css';

function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="cover-photo">
        <img src="./profile-cover.jpg" alt="Cover" />
      </div>
      <div className="profile-content">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src="./profile.jpg" alt="Profile" />
          <div className="active-status"></div>
        </div>
         <div className="profile-name">
          <h2>Mier, Santos Jr. (Ks KS)</h2>
        </div>
         {/* ✅ Add this followers/following line */}
        <div className="followers-following">
          <span className="followers">3.7K followers</span>
          <span className="dot"> ● </span>
          <span className="following">856 following</span>
        </div>
    </div>
    </div>
  );
}

export default ProfileHeader;
