import React, { useState, useEffect } from 'react';
import './WebAndCreatives.css';

const teamMembers = [
  { name: 'Naman Jain', role: 'Technical Secretary', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Piyush Upadhyay', role: 'Team Head', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Hardik Srivastava', role: 'Team Head', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Pallav Kumar', role: 'Team Head', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Dipanshu Rai', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Prithvi Raj', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Shreya Sarnagar', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Deepanshu Singh', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Shouraya Mishra', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Shambhavi Mishra', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
  { name: 'Deepanshu Singh', role: 'Core Team Members', img: 'https://i.pinimg.com/564x/13/ee/8d/13ee8d958ded67d3c1ad34e8eeb0f6cd.jpg' },
];

const WebAndCreatives = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentMember, setCurrentMember] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 200);
    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    if (!hovered && animationComplete) {
      const interval = setInterval(() => {
        setCurrentMember((prev) => (prev + 1) % teamMembers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [hovered, animationComplete]);

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className={`app ${animationComplete ? 'loaded' : ''}`}>
      {animationComplete ? null : <div className="break-image"></div>}
      <h1 className="welcomemessage">Know the Web & Creatives Team</h1>
      {animationComplete && (
        <div className="carousel"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {teamMembers.map((member, index) => {
            const position = (index - currentMember + teamMembers.length) % teamMembers.length;
            const isActive = position === 0;
            const isLeft = position === teamMembers.length - 1;
            const isRight = position === 1;

            let className = 'teammember';
            if (isActive) className += ' active';
            else if (isLeft) className += ' left';
            else if (isRight) className += ' right';

            return (
              <div key={index} className={className}>
                <div className="teaminfo">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
                <img src={member.img} alt={member.name} className="teamimg" />
              </div>
            );
          })}
        </div>
      )}
      <div className="controls">
        <button onClick={prevMember} className="control-button">Previous</button>
        <button onClick={nextMember} className="control-button">Next</button>
      </div>
    </div>
  );
};

export default WebAndCreatives;
