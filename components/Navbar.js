import Link from 'next/link';
import Switch from '@components/Switch';
import BrandIcon from '@components/icons/Brand';
import HomeIcon from '@components/icons/Home';
import AboutIcon from '@components/icons/About';
import CodeIcon from '@components/icons/Code';
import WriteIcon from '@components/icons/Write';
import styles from '@styles/Navbar.module.css';

export default function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.left}>
          <Link href="/">
            <a>
              <span>
              <BrandIcon />
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <ul className={styles['nav-list']}>
              <li className={styles.active}><Link href="/"><a><span>Home</span><HomeIcon /></a></Link></li>
              <li><a href="#about"><span>About</span><AboutIcon /></a></li>
              <li><a href="#projects"><span>Proof Of Work</span><CodeIcon /></a></li>
              <li><a href="https://dev.to/siddharthroy" rel="noreferrer" target="_blank"><span>Blogs</span> <WriteIcon /></a></li>
            </ul>
          </nav>
          <Switch on={darkTheme} onChange={e => setDarkTheme(e.target.checked)} />
        </div>
      </div>
    </header>
  );
}
