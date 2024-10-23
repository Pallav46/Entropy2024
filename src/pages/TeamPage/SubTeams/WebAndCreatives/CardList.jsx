import React from 'react';
import Card from './Card'; // Ensure this path matches where your Card component is located

const cardData = [
    {
        image: '/assets/TeamPage/team_heads/pallav.JPG',
        name: 'Pallav Kumar',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_heads/piyush.JPG',
        name: 'Piyush Upadhyay',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/deepanshu.JPG',
        name: 'Deepanshu Singh',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Dipanshu Singh',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/nishant.JPG',
        name: 'Nishant Prabhat',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/prithvi.JPG',
        name: 'Prithvi Raj',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/shambhavi.JPG',
        name: 'Shambhavi Mishra',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_heads/shouraya.JPG',
        name: 'Shouraya Mishra',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/shreya.JPG',
        name: 'Shreya Sarnagar',
        profession: 'Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
];

const CardList = () => {
    return (
        <>
        <br></br><br></br><br></br>
        <div className="card-list">
        {/* <div className="header1">DESIGN</div>
        <div className="header2">TEAM</div> */}
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                    profession={card.profession}
                    socialLinks={card.socialLinks}
                />
            ))}
        </div>
        </>
    );
};

export default CardList;