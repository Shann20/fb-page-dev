import React from 'react';
import '../styles/Header.css';

function Intro() {
  return (
    <div className="post-container post-section">
      <h3>Details</h3>
      <p><strong>Bio:</strong> Hello my name is KS KS, from BSIT 2A</p>
      <p><strong>Contact Info:</strong> 09304351469</p>
      <p><strong>Feature:</strong></p>
        <div className="featured-section">
            <div className="featured-row">
                <div className="featured-box">
                <img src="./photos/photo3.jpg" alt="Feature 1" />
                <p className="featured-title">kyuti❤</p>
                </div>
                <div className="featured-box">
                <img src="./feature-example.jpg" alt="Feature 2" />
                <p className="featured-title">Batch 2023</p>
                </div>
                <div className="featured-box">
                <img src="./photos/photo9.jpg" alt="Feature 3" />
                <p className="featured-title">Mylife25</p>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Intro;


