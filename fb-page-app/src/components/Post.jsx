import React, { useState } from 'react';
import { FaThumbsUp, FaCommentAlt, FaShare, } from 'react-icons/fa';
import { FaVideo, FaPhotoVideo, FaSmile } from 'react-icons/fa';
import '../styles/Post.css';
import { MdPublic } from 'react-icons/md';

function Post() {
  const [liked, setLiked] = useState(false);
  const [secondLiked, setSecondLiked] = useState(false);
  const [thirdLiked, setThirdLiked] = useState(false);
  const [postText, setPostText] = useState('');  // <-- Add this

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleSecond = () => {
    setSecondLiked(!secondLiked);
  };

  const toggleThird = () => {
    setThirdLiked(!thirdLiked);
  };
  return (
    <div className="post-container">
      {/* Composer */}
      <h4>Post</h4>
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
         <div className="composer-actions">
          <div className="item">
          <button className="live-video-btn">
            <FaVideo className="live-video-icon" />
            Live Video
          </button>
          </div>
         <div className="item">
          <button className="photo-video-btn">
            <FaPhotoVideo className="photo-video-icon" />
            Photo Video
          </button>
          </div>
          <div className="item">
          <button className="feeling-activity-btn">
            <FaSmile className="feeling-activity-icon" />
            Feeling Activity
          </button>
          </div>
          </div>
          </div>

      {/* Post */}
      <div className="post-card">
        <div className="post-header">
            <img src="./profile.jpg" alt="Profile" className="composer-avatar" />
            <div className="post-info">
            <div className="post-author"><strong>Mier, Santos Jr.</strong></div>
            <div className="post-time">September 3 at 10:00 PM<MdPublic style={{ fontSize: "12px"}}/></div>
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
        <div className="my-button">
        <button className="ads-icon">See insights and ads</button>
        <button className="boost-icon">Boost post</button>
        </div>
      </div>

      {/* Post 2*/}
      <div className="post-card">
        <div className="post-header">
            <img src="./profile.jpg" alt="Profile" className="composer-avatar" />
            <div className="post-info">
            <div className="post-author"><strong>Mier, Santos Jr.</strong></div>
            <div className="post-time">September 8 at 9:04 PM <MdPublic style={{ fontSize: "12px"}}/></div>
          </div>
        
        </div>
        

        <div className="post-content">
          <p style={{ fontSize: "12px"}}>ka gwapa bah oii AHAHAAH</p>
          <img src="./photos/photo7.jpg" alt="post-picture" style={{ width: "100%"}}/>
        </div>

        <div className="post-actions">
          <button
            className={`action-btn ${secondLiked ? 'liked' : ''}`}
            onClick={toggleSecond}
            aria-label="Like"
          >
            <FaThumbsUp className="action-icon" />Like</button>

          <button className="action-btn" aria-label="Comment">
            <FaCommentAlt className="action-icon" />Comment</button>

          <button className="action-btn" aria-label="Share">
            <FaShare className="action-icon" />Share</button> 
        </div>
        <div className="my-button">
        <button className="ads-icon">See insights and ads</button>
        <button className="boost-icon">Boost post</button>
        </div>
      </div>

      {/* Post 3 */}
      <div className="post-card">
        <div className="post-header">
            <img src="./profile.jpg" alt="Profile" className="composer-avatar" />
            <div className="post-info">
            <div className="post-author"><strong>Mier, Santos Jr.</strong></div>
            <div className="post-time">September 8 at 9:21 PM <MdPublic style={{ fontSize: "12px"}}/></div>
          </div>
        </div>
        

        <div className="post-content">
          <p style={{ fontSize: "12px"}}>Still strong sa atong frienship mga ett HAHAHAHAHA</p>
          <img src="./photos/photo5.jpg" alt="post-picture" style={{ width: "100%"}}/>
        </div>

        <div className="post-actions">
          <button
            className={`action-btn ${thirdLiked ? 'liked' : ''}`}
            onClick={toggleThird}
            aria-label="Like"
          >
            <FaThumbsUp className="action-icon" />Like</button>

          <button className="action-btn" aria-label="Comment">
            <FaCommentAlt className="action-icon" />Comment</button>

          <button className="action-btn" aria-label="Share">
            <FaShare className="action-icon" />Share</button>
        </div>
         <div className="my-button">
          <button className="ads-icon">See insights and ads</button>
          <button className="boost-icon">Boost post</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
