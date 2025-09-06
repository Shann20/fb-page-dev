import React from 'react';
import '../styles/Friends.css';

const friendsData = [
  { name: 'Mel Ca', image: './melca.jpg' },
  { name: 'Gwyne Saulon', image: './saulon.jpg' },
  { name: 'Rik D Se', image: './sedrik.jpg' },
  { name: 'Mark Collado', image: './mark.jpg' },
  { name: 'Inday Cherlyn', image: './cherlyn.jpg' },
  { name: 'Ban Lagunday', image: './banban.jpg' },
  { name: 'Myka Rosales', image: './myka.jpg' },
  { name: 'Raeinhyer Sala ', image: './sala.jpg' },
  { name: 'Rey MA RK', image: './reymark.jpg' },
];

function Friends() {
  return (
    <div className="friends-section">
      <div className="friends-header">
        <h2>Friends</h2>
        <a href="#" className="see-all">See all friends</a>
      </div>
      <p className="friend-count">3,645 friends ● 9 Mutual Friends</p>

      <div className="friends-grid">
        {friendsData.map((friend, idx) => (
          <div className="friend-card" key={idx}>
            <img src={friend.image} alt={friend.name} className="friend-image" />
            <p className="friend-name">{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
