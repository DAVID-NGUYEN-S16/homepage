import React from 'react';
import styles from '../styles/MainContent.module.css';

const Section = ({ title, children, id }) => {
  return (
    <section id={id} className={styles.section}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

