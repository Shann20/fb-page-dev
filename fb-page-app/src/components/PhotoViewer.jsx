import React from 'react';
import '../styles/PhotoViewer.css';

const PhotoViewer = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="photo-viewer-overlay" onClick={onClose}>
      <div className="photo-viewer-content" onClick={(e) => e.stopPropagation()}>
        <img src={photo} alt="Preview" className="photo-viewer-img" />
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default PhotoViewer;
