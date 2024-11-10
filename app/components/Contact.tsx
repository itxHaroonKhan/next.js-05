import React from 'react';
import { GoComment } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";
import styles from './Contact.module.css'; // Import the CSS Module

const Contact = () => {
  return (
    <div className={styles['contact-container']} id='contact'>
      <div className={styles['form-container']}>
        <h2 className={styles['contact-heading']}>Contact Us</h2>
        
        <form data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Name</label>
            <input type="text" className={`${styles['input-field']} border-gray-300`} placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              <SiMinutemailer className={`${styles['icon-inline']} inline-block`} />
              Email
            </label>
            <input type="email" className={`${styles['input-field']} border-gray-300`} placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              <GoComment className={`${styles['icon-inline']} inline-block`} />
              Message
            </label>
            <textarea className={`${styles['textarea-field']} border-gray-300`} rows={4} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className={styles['submit-button']}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
