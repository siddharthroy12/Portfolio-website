import Switch from '@components/Switch';
import BrandIcon from '@components/icons/Brand';
import styles from '@styles/Navbar.module.css';

export default function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.left}>
          <BrandIcon />
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <ul className={styles['nav-list']}>
              <li className={styles.active}><a>Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Proof Of Work</a></li>
              <li><a href="https://dev.to/siddharthroy" rel="noreferrer" target="_blank">Blogs</a></li>
            </ul>
          </nav>
          <Switch on={darkTheme} onChange={e => setDarkTheme(e.target.checked)} />
        </div>
      </div>
    </header>
  );
}
