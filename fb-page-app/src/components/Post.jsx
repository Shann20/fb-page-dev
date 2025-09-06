import React, { useState } from 'react';
import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa';
import { FaVideo, FaPhotoVideo, FaSmile } from 'react-icons/fa';
import '../styles/Post.css';

function Post() {
  const [liked, setLiked] = useState(false);
  const [postText, setPostText] = useState('');  // <-- Add this

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post-container post-section">
      {/* Composer */}
        <div className="composer-top">
           <img src="./profile.jpg" alt="Profile" className="composer-avatar" />
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="composer-input"
          />
        </div>
        <hr />
        <div className="container">
        <div className="item">
         <div className="composer-actions">
          <button className="live-video-btn">
            <FaVideo className="live-video-icon" />
            Live Video
          </button>
         <div className="item">
          <button className="photo-video-btn">
            <FaPhotoVideo className="photo-video-icon" />
            Photo/ <br />Video
          </button>
          </div>
          <div className="item">
          <button className="feeling-activity-btn">
            <FaSmile className="feeling-activity-icon" />
            Feeling/ <br />Activity
          </button>
          </div>
          </div>
          </div>
          </div>

      {/* Post */}
      <div className="post-card">
        <div className="post-header">
            <img src="./profile.jpg" alt="Profile" className="composer-avatar" />
            <div className="post-info">
            <div className="post-author"><strong>Mier, Santos Jr.</strong></div>
            <div className="post-time">September 3 at 10:00 PM</div>
          </div>
        </div>
        

        <div className="post-content">
          <p style={{ fontSize: "20px"}}>“I need you like a heart needs a beat.” <br />– One Republic</p>
        </div>

        <div className="post-actions">
          <button
            className={`action-btn ${liked ? 'liked' : ''}`}
            onClick={toggleLike}
            aria-label="Like"
          >
            <FaThumbsUp className="action-icon" />Like</button>

          <button className="action-btn" aria-label="Comment">
            <FaCommentAlt className="action-icon" />Comment</button>

          <button className="action-btn" aria-label="Share">
            <FaShare className="action-icon" />Share</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
