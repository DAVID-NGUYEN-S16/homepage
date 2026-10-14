import React from 'react';
import styles from '../styles/MainContent.module.css';

const NewsItem = ({ date, content, links = [] }) => {
  // Simple link extraction from content (basic implementation)
  const renderContent = () => {
    if (!content) {
      return null;
    }

    if (!links || links.length === 0) {
      return <span>{content}</span>;
    }

    // Try to link "CW Lab" with the first link if present in content
    const primaryLink = typeof links[0] === 'string' ? links[0] : links[0].url;
    const anchorText = 'CW Lab';
    const anchorIndex = content.indexOf(anchorText);

    if (primaryLink && anchorIndex !== -1) {
      const before = content.slice(0, anchorIndex);
      const after = content.slice(anchorIndex + anchorText.length);

      return (
        <span>
          {before}
          <a href={primaryLink} target="_blank" rel="noopener noreferrer">
            {anchorText}
          </a>
          {after}
        </span>
      );
    }

    // Fallback: append links at the end as labeled anchors
    return (
      <span>
        {content}
        {links.map((link, idx) => {
          // A link is either a plain URL or { label, url }.
          const url = typeof link === 'string' ? link : link.url;
          const label = typeof link === 'string'
            ? (links.length === 1 ? 'Link' : `Link ${idx + 1}`)
            : link.label;
          return (
            <React.Fragment key={idx}>
              {' '}
              <a href={url} target="_blank" rel="noopener noreferrer">
                [{label}]
              </a>
            </React.Fragment>
          );
        })}
      </span>
    );
  };

  return (
    <div className={styles.newsItem}>
      <strong className={styles.newsDate}>[{date}]</strong> {renderContent()}
    </div>
  );
};

export default NewsItem;

