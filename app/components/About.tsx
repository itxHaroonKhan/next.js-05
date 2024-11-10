import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles["about-container"]} id="about">
      <div className={styles["about-content"]}>
        
        {/* Image */}
        <Image
          src="https://i.pinimg.com/736x/aa/3d/37/aa3d3786d6ead67f131663cdda34f264.jpg"
          alt="About Me"
          className={styles["about-image"]}
          data-aos="zoom-in-up"
          width={500} // specify width
          height={500} // specify height
        />
        
        {/* About Content */}
        <h2 className={styles["about-heading"]} data-aos="zoom-in-up">
          About Me
        </h2>
        <p className={styles["about-text"]} data-aos="zoom-in-up">
          I am a web developer with a passion for creating interactive and user-friendly applications.
          With a background in programming and design, I aim to deliver high-quality solutions 
          that meet client needs and exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
