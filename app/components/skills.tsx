import React from 'react';
import styles from './Skills.module.css'; // Import CSS module

const Skills = () => {
  return (
    <div className={styles['skills-container']} id='skills'>
      <h1 className={styles['skills-heading']}>Skills</h1>
      
      <div>
        <h2 className={styles['skills-subheading']} data-aos="zoom-in-up">
          Technologies I Work With
        </h2>
        
        <p className={styles['skills-description']} data-aos="zoom-in-up">
          I specialize in a variety of modern web technologies that enhance both user experience and development efficiency. Here are some of the key technologies I work with:
        </p>
      </div>

      <div className={styles['skills-list']}>
        <div className='space-y-2'>
          <h2 className={styles['skills-item']} data-aos="zoom-in-up">TypeScript</h2>
          <h2 className={styles['skills-item']} data-aos="zoom-in-up">React.js</h2>
          <h2 className={styles['skills-item']} data-aos="zoom-in-up">Next.js</h2>
        </div>
        <div className='space-y-2'>
          <h2 className={styles['skills-item']} data-aos="zoom-in-up">Tailwind CSS</h2>
          <h2 className={styles['skills-item']} data-aos="zoom-in-up">CSS</h2>
          <h2 className={styles['skills-item']} data-aos="zoom-in-up">Node.js</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
