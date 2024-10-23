import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling
import Logo from '/assets/logo/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu on any screen size
    };

    return (
        <nav className="navbar">
            {/* <div className="navbar-title">{Logo}</div> */}
            <div className="navbar-title">
    <img src={Logo} alt="Logo" className="navbar-logo" />
</div>

            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? (
                    <span className="navbar-icon-close">✖</span> // Close icon
                ) : (
                    <span className="navbar-icon-open">☰</span> // Hamburger icon
                )}
            </div>
            <div className={`navbar-links ${isOpen ? 'navbar-show' : ''}`}>
                <a href="/" className="navbar-link">Home</a>
                <a href="/teams" className="navbar-link">Team</a>
                <a href="/events" className="navbar-link">Events</a>
                <a href="/gallery" className="navbar-link">Gallery</a>
                <a href="/sponsors" className="navbar-link">Sponsors</a>
            </div>
        </nav>
    );
};

export default Navbar;
