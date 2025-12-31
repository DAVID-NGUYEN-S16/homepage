import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import styles from './styles/App.module.css';
import contentData from './data/content.json';
import './styles/global.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Load content data
    setData(contentData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <div className={styles.app}>
        <Header name={data.personal.name} />
        <div className={styles.container}>
          <Sidebar personal={data.personal} contact={data.contact} />
          <MainContent data={data} />
        </div>
        <footer className={styles.footer}>
          © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

