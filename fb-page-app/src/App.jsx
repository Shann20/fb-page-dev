import React, { useState } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import Tabs from './components/Tabs';
import Intro from './components/Intro';
import Post from './components/Post';
import Friends from './components/Friends';
import Photos from './components/Photos';
//import PhotoViewer from './components/PhotoViewer';
import './styles/Post.css';
import './styles/index.css';

function App() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="app-container">
      <Header />
      <ProfileHeader />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="tab-content">
        {activeTab === 'about' && <Intro />}
        {activeTab === 'posts' && <Post />}
        {activeTab === 'friends' && <Friends />}
        {activeTab === 'photos' && <Photos />}
      </div>
    </div>
  );
}

export default App;
