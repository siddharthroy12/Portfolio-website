import { useState, useEffect } from 'react';
import Link from 'next/link';
import CloseIcon from '@components/icons/Close';
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === null) {
      localStorage.setItem('darkTheme', true);
    } else {
      setDarkTheme(JSON.parse(localStorage.getItem('darkTheme')));
    }

    if (localStorage.getItem('showAd') === null) {
      localStorage.setItem('showAd', true);
      setShowAd(true);
    } else {
      setShowAd(JSON.parse(localStorage.getItem('showAd')));
    }
  }, []);

  function onSetDarkTheme(value) {
    localStorage.setItem('darkTheme', value);
    setDarkTheme(value);
  }

  function onAdClose() {
    localStorage.setItem('showAd', false);
    setShowAd(false);
  }

  return (<div className={styles.page + ' ' + (darkTheme ? styles['dark-theme'] : styles['light-theme'])}>
    <Navbar darkTheme={darkTheme} setDarkTheme={onSetDarkTheme}/>
    {showAd ? (
    <div className={styles.ad}>
      <div className="container">
        <p>Want a website? I can build one for you! Check out the <Link href="/#pricing"><a>pricing section</a></Link> for more info</p>
        <button onClick={onAdClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
    ) : null}
    <main className="container">
      { children }
    </main>
    <Footer />
  </div>);
}
