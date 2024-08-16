import React from 'react';
import './Navbar.module.css'; // Ensure your CSS is properly imported
// import 'remixicon/fonts/remixicon.css'; // Import Remixicon CSS

const Navbar = () => {
  return (
    <div id="page" className="site">
      <div className="container">
        <nav>
          <input type="checkbox" id="link" />
          <label htmlFor="link" className="link">
            <i className="menu ri-menu-3-line ri-5px"></i>
            <i className="close ri-menu-3-line ri-5px"></i>
          </label>
          <ul className="submenu">
            <li>
              <a href="#">
                <span>Call</span>
                <i className="ri-phone-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Headphone</span>
                <i className="ri-headphone-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Chat</span>
                <i className="ri-chat-3-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Location</span>
                <i className="ri-map-pin-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Blaze</span>
                <i className="ri-blaze-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Weather</span>
                <i className="ri-moon-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Account</span>
                <i className="ri-phone-line"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.logo}>
          <a href="#" className={styles.navLinks}>
            <span className={styles.linkText}>Entropy</span>
            <FontAwesomeIcon className={styles.icon} icon={faAnglesRight} />
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLinks}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className={styles.linkText}>Home</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLinks}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <span className={styles.linkText}>Events</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLinks}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <span className={styles.linkText}>Team</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLinks}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faImages} />
            </div>
            <span className={styles.linkText}>Gallery</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLinks}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <span className={styles.linkText}>Contact-Us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
