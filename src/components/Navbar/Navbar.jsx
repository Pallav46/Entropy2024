import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarDays,
  faUserGroup,
  faImages,
  faPhoneVolume,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icons
import { library } from "@fortawesome/fontawesome-svg-core";
import styles from "./Navbar.module.css";

// Add the imported icons to the library
library.add(
  faHouse,
  faCalendarDays,
  faUserGroup,
  faImages,
  faPhoneVolume,
  faAnglesRight
);

const Navbar = () => {
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
