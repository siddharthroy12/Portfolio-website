import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Switch from '@components/Switch';
import BrandIcon from '@components/icons/Brand';
import MenuIcon from '@components/icons/Menu';
import styles from '@styles/Navbar.module.css';

export default function Navbar({ darkTheme, setDarkTheme }) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const router = useRouter();
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
              <li className={router.pathname === '/' ? styles.active : null}><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/#about"><a>About</a></Link></li>
              <li><Link href="/#projects"><a>Proof of Work</a></Link></li>
              <li className={router.pathname === '/blogs' || router.pathname.startsWith('/blog') ? styles.active : null}><Link href="/blogs"><a>Blogs</a></Link></li>
            </ul>
          </nav>
          <Switch on={darkTheme} onChange={e => setDarkTheme(e.target.checked)} />
        </div>
      </div>
    </header>
  );
}
