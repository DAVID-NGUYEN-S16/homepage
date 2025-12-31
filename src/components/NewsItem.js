import React from 'react';
import styles from '../styles/MainContent.module.css';

const NewsItem = ({ date, content, links = [] }) => {
  // Simple link extraction from content (basic implementation)
  const renderContent = () => {
    if (links.length === 0) {
      return <span>{content}</span>;
    }
    
    // For now, just render the content as-is
    // In a full implementation, you'd parse and replace link markers
    return <span>{content}</span>;
  };

  return (
    <div className={styles.newsItem}>
      <strong className={styles.newsDate}>[{date}]</strong> {renderContent()}
    </div>
  );
};

export default NewsItem;

