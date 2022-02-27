import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  return (<div className={styles.page + ' ' + (darkTheme ? styles['dark-theme'] : styles['light-theme'])}>
    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    <main className="container">
      { children }
    </main>
    <Footer />
  </div>);
}
