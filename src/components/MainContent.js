import React from 'react';
import styles from '../styles/MainContent.module.css';
import Section from './Section';
import NewsItem from './NewsItem';

const MainContent = ({ data }) => {
  const { personal, news, publications, education, experiences } = data;

  return (
    <main className={styles.mainContent}>
      <article className={styles.article}>
        <div className={styles.intro}>
          <p>
            {personal.bio.split(/(<highlight>.*?<\/highlight>)/g).map((part, index) => {
              if (part.startsWith('<highlight>') && part.endsWith('</highlight>')) {
                const text = part.replace(/<\/?highlight>/g, '');
                return <span key={index} className={styles.highlight}>{text}</span>;
              }
              return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
          </p>
        </div>

        <Section title="News" id="news">
          <div className={styles.newsScroll}>
            <div className={styles.newsList}>
              {news.map((item, index) => (
                <NewsItem
                  key={index}
                  date={item.date}
                  content={item.content}
                  links={item.links}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section title="Publications" id="publications">
          <p className={styles.publicationsNote}>
            <em>(*) denotes equal contribution.</em>
          </p>
          {publications.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className={styles.publicationYear}>
              <h3 className={styles.publicationYearTitle}>{yearGroup.year}</h3>
              {yearGroup.items.map((pub) => (
                <div key={pub.id} className={styles.publication}>
                  <div className={styles.publicationNumber}>{pub.id}.</div>
                  <div className={styles.publicationContent}>
                    <div className={styles.publicationTitle}>{pub.title}</div>
                    <div className={styles.publicationAuthors}>{pub.authors}</div>
                    <div className={styles.publicationVenue}>{pub.venue}</div>
                    {pub.links && (
                      <div className={styles.publicationLinks}>
                        {pub.links.paper && (
                          <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>
                            [Paper]
                          </a>
                        )}
                        {pub.links.github && (
                          <a href={pub.links.github} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>
                            [Code]
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Section>

        <Section title="Educations" id="education">
          <ol className={styles.educationList}>
            {education.map((edu, index) => (
              <li key={index} className={styles.educationItem}>
                <strong>{edu.degree}</strong> ({edu.period})<br />
                {edu.institution}, {edu.address}<br />
                <em>
                  {Array.isArray(edu.details) ? (
                    edu.details.map((detail, idx) => (
                      <React.Fragment key={idx}>
                        {detail}
                        {idx < edu.details.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  ) : (
                    edu.details
                  )}
                </em>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Selected Research Experiences" id="experiences">
          <ol className={styles.experienceList}>
            {experiences.map((exp, index) => (
              <li key={index} className={styles.experienceItem}>
                <strong>{exp.title}</strong> ({exp.period})<br />
                {exp.organization}, {exp.location}<br />
                {exp.Supervisor && (
                  <>
                    <em>Supervised by {exp.Supervisor}</em><br />
                  </>
                )}
                {exp.details && (
                  <em>
                    {Array.isArray(exp.details) ? (
                      <ul className={styles.detailsList}>
                        {exp.details.map((detail, idx) => (
                          detail && <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.details
                    )}
                  </em>
                )}
              </li>
            ))}
          </ol>
        </Section>
      </article>
    </main>
  );
};

export default MainContent;

