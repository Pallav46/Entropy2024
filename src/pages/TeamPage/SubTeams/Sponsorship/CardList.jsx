import React from 'react';
import Card from './Card'; // Ensure this path matches where your Card component is located

const cardData = [
    {
        image: '/assets/TeamPage/team_heads/dinakar.JPG',
        name: 'Shriram Dinkar',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Harsh Mishra',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Anirudha Laxmikant Gade',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/bhatt.JPG',
        name: 'Aditya Bhatt',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Ratna Jaiswal',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Kavita Yadav',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Anupam Tripathi',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Chiranjeet Saha',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Harshit Jain',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'XYZ',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'XYZ',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Emily Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
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
