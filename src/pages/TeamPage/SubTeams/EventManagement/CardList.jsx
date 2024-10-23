import React from 'react';
import Card from './Card'; // Ensure this path matches where your Card component is located

const cardData = [
    {
        image: '/assets/TeamPage/team_heads/girish.JPG',
        name: 'Sheshagiri Sampath Girish Vardhan',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_heads/shouraya.JPG',
        name: 'Shouraya Mishra',
        profession: 'Team Head',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/shouryaa.16/?utm_source=ig_web_button_share_sheet', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_heads/pratap.JPG',
        name: 'Pratapaditya Chander',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/_pretop_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/sachin.JPG',
        name: 'Sachin Mohanty',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/sach_moh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/debrup.JPG',
        name: 'Debrup Das',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/shambhavi.JPG',
        name: 'Shambhavi Mishra',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/born_insane16?igsh=MWxoNW1vZGxmY2Nmcw%3D%3D', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/samridhi.JPG',
        name: 'Samridhi Tiwari',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/samr_idhitiwari?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/deepika.JPG',
        name: 'Vemali Deepika',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/deepika_vemali?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/yash_singhal.JPG',
        name: 'Yash Singhal',   
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/yash_singha1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/lohith.JPG',
        name: 'Tadikonda Lohith Aditya',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/lohith471407?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Shubhashish Shukla',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/itsmeshubh005/?utm_source=ig_web_button_share_sheet', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/shivam_raj.JPG',
        name: 'Shivam Raj',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/_shivam26raj_/?utm_source=ig_web_button_share_sheet', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/bhatt.JPG',
        name: 'Aditya Bhatt',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/its_aditya.b_205?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Kunal Purohit',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/kunal.purohit007?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/anurag.JPG',
        name: 'Anurag Sahoo',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/samadrita.JPG',
        name: 'Samadrita Mondal',
        profession: 'Core Team Member',
        socialLinks: [
            { url: 'https://www.facebook.com/', icon: 'ri-facebook-line' },
            { url: 'https://www.instagram.com/samadrita.30?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ri-instagram-line' },
            { url: 'https://twitter.com/', icon: 'ri-twitter-line' },
        ],
    },
    {
        image: '/assets/TeamPage/team_non_heads/agnidipto.JPG',
        name: 'Agnidipto Banik',
        profession: 'Core Team Member',
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
