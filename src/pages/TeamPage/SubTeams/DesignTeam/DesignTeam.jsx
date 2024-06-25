import React, { useState } from 'react';
import './DesignTeam.css';
import Sparkles from './sparkles'; 

const teamMembers = [
  {
    name: 'Alex',
    role: 'Designer',
    bio: 'Expert in frontend development.',
    favoriteGame: 'Cyberpunk 2077',
    image: '/public/images/design/alex.jpg'
  },
  {
    name: 'Steve',
    role: 'Developer',
    bio: 'Passionate about low level programming.',
    favoriteGame: 'Overwatch',
    image: '/public/images/design/steve.png'
  },
  {
    name: 'Wither Skeleton',
    role: 'Tester',
    bio: 'Self proclaimed expert in judging others work.',
    favoriteGame: 'D&D',
    image: '/public/images/design/wither_skeleton.jpg'
  },
  {
    name: 'Herobrine',
    role: 'The Intern',
    bio: 'I deleted the production database twice',
    favoriteGame: 'Asphalt',
    image: '/public/images/design/herobrine.png'
  }
  // Additional team members
];

const DesignTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className='page-bg'>
      <div className="design-team">
        <h1>Meet Our Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-member" 
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
            </div>
          ))}
        </div>

        {selectedMember && (
          
            <div className="member-details">
              <div className="card">
                <img src={selectedMember.image} />
                <h2><Sparkles>{selectedMember.name}</Sparkles></h2>
                <h3><Sparkles>{selectedMember.role}</Sparkles></h3>
                <p><Sparkles>{selectedMember.bio}</Sparkles></p>
                <p><Sparkles><strong>Favorite Game:</strong> {selectedMember.favoriteGame}</Sparkles></p>
                <button onClick={() => setSelectedMember(null)}>Close</button>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default DesignTeam;
