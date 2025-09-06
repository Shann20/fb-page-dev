import React from 'react'
import '../styles/Tabs.css'

function Tabs({ activeTab, setActiveTab }) {
  return (
    <nav className="tabs">
      <button onClick={() => setActiveTab('posts')} className={activeTab === 'posts' ? 'active' : ''}>Posts</button>
      <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About</button>
      <button onClick={() => setActiveTab('friends')} className={activeTab === 'friends' ? 'active' : ''}>Friends</button>
      <button onClick={() => setActiveTab('photos')} className={activeTab === 'photos' ? 'active' : ''}>Photos</button>
    </nav>
  )
}

export default Tabs;
