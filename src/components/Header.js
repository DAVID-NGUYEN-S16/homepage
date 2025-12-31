import React from 'react';
import styles from '../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';

const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="#home" className={styles.logo}>
          {name}
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

