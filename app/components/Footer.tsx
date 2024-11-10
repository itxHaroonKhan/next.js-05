import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; // Importing email and phone icons
import styles from './Footer.module.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className="container mx-auto">
        <h2 className={styles["footer-heading"]}>Join Our Colorful Community</h2>
        <p className={styles["footer-text"]}>Follow us on social media for vibrant updates!</p>

        {/* Social Media Icons */}
        <div className={styles["social-media-icons"]}>
          <a href="#" className={styles["social-media-icon"]} aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
            <span>Facebook</span>
          </a>
          <a href="#" className={styles["social-media-icon"]} aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
          <a href="#" className={styles["social-media-icon"]} aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className={styles["social-media-icon"]} aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
            <span>YouTube</span>
          </a>
        </div>

        {/* Email Section */}
        <div className={styles["contact-info"]}>
          <AiOutlineMail className={styles["contact-info-i"]} size={40} />
          <span>itxharoonkhan@gmail.com</span>
        </div>
        
        {/* Phone Section */}
        <div className={styles["contact-info"]}>
          <AiOutlinePhone className={styles["contact-info-i"]} size={40} />
          <span>+92+3412231142</span> {/* Replace with your phone number */}
        </div>

        <div className={styles["footer-small-text"]}>
          <p>© {new Date().getFullYear()} Haroon Rasheed. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
