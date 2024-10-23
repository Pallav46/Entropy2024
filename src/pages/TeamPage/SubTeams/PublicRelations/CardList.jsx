import React from 'react';
import Card from './Card'; // Ensure this path matches where your Card component is located

const cardData = [
    {
        image: '/assets/TeamPage/team_heads/deepanika.JPG',
        name: 'Deepanika Gupta',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/deepanikagupta/?utm_source=ig_web_button_share_sheet', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_heads/vamika.JPG',
        name: 'Vamika Chaturvedi',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/vamzz_22?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/pranavi.JPG',
        name: 'Vadlamuru Pranavi',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/pranavi_varma___/?utm_source=ig_web_button_share_sheet', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/shreeja.JPG',
        name: 'K.Shreeja',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/shreeja_reddy21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
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
