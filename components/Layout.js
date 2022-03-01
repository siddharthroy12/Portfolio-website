import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === null) {
      localStorage.setItem('darkTheme', true);
    } else {
      setDarkTheme(JSON.parse(localStorage.getItem('darkTheme')));
    }
  }, []);

  function onSetDarkTheme(value) {
    localStorage.setItem('darkTheme', value);
    setDarkTheme(value);
  }

  return (<div className={styles.page + ' ' + (darkTheme ? styles['dark-theme'] : styles['light-theme'])}>
    <Navbar darkTheme={darkTheme} setDarkTheme={onSetDarkTheme}/>
    <main className="container">
      { children }
    </main>
    <Footer />
  </div>);
}
