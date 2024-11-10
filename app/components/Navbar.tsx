import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarLogo}>Haroon Rasheed</div>

        {/* Desktop Menu */}
        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.navbarMenuVisible : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className={styles.menuIcon} aria-label="Toggle menu">
          <IoMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={`${styles.mobileMenu} ${styles.menuEnter}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
