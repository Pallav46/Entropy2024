import React, { useState } from 'react';
import SponsorCSS from './Sponsorship.module.css';

const Sponsorship = () => {
    const [isStopped, setIsStopped] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleItemHover = (position) => {
        setIsStopped(true);
        setHoveredItem(position);
    };

    const handleItemLeave = () => {
        setIsStopped(false);
        setHoveredItem(null);
    };

    // Define data for each item
    const items = [
        { position: 1, name: 'NAME 1', role: 'Role 1', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 3, name: 'NAME 2', role: 'Role 2', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 2, name: 'NAME 3', role: 'Role 3', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 4, name: 'NAME 4', role: 'Role 4', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 5, name: 'NAME 5', role: 'Role 5', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 6, name: 'NAME 6', role: 'Role 6', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 7, name: 'NAME 7', role: 'Role 7', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 8, name: 'NAME 8', role: 'Role 8', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },

        { position: 9, name: 'NAME 9', role: 'Role 9', social: { instagram: "https://www.instagram.com/", 
                                                                 twitter: "https://twitter.com/", 
                                                                 linkedin: "https://www.linkedin.com/", 
                                                                 facebook: "https://www.facebook.com" } },
    ];

    const renderItemInfo = () => {
        if (hoveredItem !== null) {
            const selectedItem = items.find(item => item.position === hoveredItem);
            if (selectedItem) {
                return (
                    <div className={SponsorCSS['item-info']}>
                        <h3>{selectedItem.name}</h3>
                        <p>{selectedItem.role}</p>
                    </div>
                );
            }
        }
        return (
            <div className={SponsorCSS['team-info']}>
                <h3>SPONSOR TEAM</h3>
                <p>Meet our fantastic team of Sponsorship</p>
            </div>
        );
    };
    return (
        <div className={SponsorCSS.banner}>
            <div className={`${SponsorCSS.slider} ${isStopped ? SponsorCSS.stopped : ''}`}
                onMouseEnter={() => setIsStopped(true)}
                onMouseLeave={() => setIsStopped(false)}
                style={{ '--quantity': items.length }}
            >
                {/* Render slider items */}
                {items.map(item => (
                    <div className={SponsorCSS.item} style={{ '--position': item.position }} key={item.position}
                        onMouseEnter={() => handleItemHover(item.position)}
                        onMouseLeave={handleItemLeave}
                    >
                        <img src={`./../../../../../public/images/sponsorTeam/profile_${item.position}.avif`} alt={`profile ${item.position}`}/>
                        {hoveredItem === null && (
                            <div className={SponsorCSS.name}>{item.name}</div>
                        )}
                        {hoveredItem === item.position && (
                            <div className={SponsorCSS.social}>
                                <a href={item.social.instagram} target="_blank" rel="noopener noreferrer">
                                    <img src="./../../../../../public/images/sponsorTeam/instagram-icon.png" alt="Instagram" />
                                </a>
                                <a href={item.social.twitter} target="_blank" rel="noopener noreferrer">
                                    <img src="./../../../../../public/images/sponsorTeam/twitter-icon.png" alt="Twitter" />
                                </a>
                                <a href={item.social.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="./../../../../../public/images/sponsorTeam/linkedin-icon.png" alt="LinkedIn" />
                                </a>
                                <a href={item.social.facebook} target="_blank" rel="noopener noreferrer">
                                    <img src="./../../../../../public/images/sponsorTeam/facebook-icon.png" alt="Facebook" />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={SponsorCSS.content}>
                {renderItemInfo()}
            </div>
        </div>
    );
};

export default Sponsorship;
