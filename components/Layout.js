import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (<div className={styles.page + ' ' + styles['dark-theme']}>
    <Navbar />
    <main className="container">
      { children }
    </main>
    <Footer />
  </div>);
}
