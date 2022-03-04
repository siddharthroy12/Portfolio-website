import { useState } from 'react';
import Link from 'next/link';
import Switch from '@components/Switch';
import BrandIcon from '@components/icons/Brand';
import MenuIcon from '@components/icons/Menu';
import styles from '@styles/Navbar.module.css';

export default function Navbar({ darkTheme, setDarkTheme }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className="container">
        <button className={styles['menu-button']} onClick={() => setNavIsOpen(prev => !prev)}>
            <MenuIcon />
          </button>
        <div className={styles.left}>
          <Link href="/">
            <a>
              <span>
                <BrandIcon />
              </span>
              <span>
                Siddharth Roy
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <ul className={styles['nav-list'] + ' ' + (!navIsOpen ? styles['nav-hidden'] : '')}>
              <li className={styles.active}><Link href="/"><a>Home</a></Link></li>
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
