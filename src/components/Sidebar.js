import React, { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';
import { LocationIcon, EmailIcon, LinkedInIcon, GitHubIcon, ScholarIcon, CVIcon } from '../utils/icons';

const Sidebar = ({ personal, contact }) => {
  const [displayedName, setDisplayedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fullName = personal.name;
    let currentIndex = 0;

    // Typing animation
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Hide cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => {
      clearInterval(typingInterval);
    };
  }, [personal.name]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.profileImageContainer}>
          <img
            src={personal.image_avatar || "/images/profile.jpg"}
            alt={personal.name}
            className={styles.profileImage}
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className={styles.profilePlaceholder} style={{ display: 'none' }}>
            <div className={styles.profilePlaceholderText}>
              {personal.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
        <h1 className={styles.name}>
          {displayedName}
          {showCursor && <span className={styles.typingCursor}>|</span>}
        </h1>
        <p className={styles.title}>{personal.title}</p>
        <div className={styles.contactLinks}>
          <a href={`https://maps.google.com/?q=${contact.location}`} className={styles.contactLink}>
            <LocationIcon />
            <span>{contact.location}</span>
          </a>
          <a href={`mailto:${contact.email}`} className={styles.contactLink}>
            <EmailIcon />
            <span>Email</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <GitHubIcon />
            <span>Github</span>
          </a>
          <a href={contact.googleScholar} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <ScholarIcon />
            <span>Google Scholar</span>
          </a>
          {contact.cv && (
            <a href={contact.cv} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <CVIcon />
              <span>CV</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

