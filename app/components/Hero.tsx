import React from 'react';
import Navbar from './Navbar';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div id="hero" className={styles['hero-container']}>
      <Navbar />
      {/* Hero Content */}
      <div className={styles['hero-content']}>
        <h1 className={styles.heding}>
          <span>Hello, I am Haroon Rasheed ;</span>
        </h1>
        <p className={styles['hero-paragraph']}>
          A passionate web developer with expertise in crafting interactive and dynamic web applications.
          I strive to create intuitive user experiences and love transforming complex problems into elegant solutions.
          Driven by curiosity and a love for coding, I&apos;m always excited to bring new ideas to life!
        </p>
        <br />
        <button className={styles['hero-button']}>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
