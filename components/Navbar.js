import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
	const router = useRouter();

	const isActive = (path) => {
		if (path === '/') {
			if (router.asPath === '/') {
				return styles.active
			}
		} else {
			return router.asPath.startsWith(path) ? styles.active : ''
		}
	}

	return (
		<div className={styles.container}>
			<Link href="/">
			<div className={styles.brand}>
				<img src="/BrandLogo.svg" alt="BrandIcon" className={styles.brandlogo}/>
				<p className={styles.brandname}>SiddharthRoy</p>
			</div>
			</Link>
			<nav className={styles.nav}>
				<ul>
					<li className={isActive('/')}><Link href="/">Home</Link></li>
					<li className={isActive('/portfolio')}><Link href="/portfolio">Portfolio</Link></li>
					<li className={isActive('/blogs')}><Link href="/blogs">Blogs</Link></li>
					<li className={isActive('/templates')}><Link href="/templates">Templates</Link></li>
				</ul>
			</nav>
			<a href="#contact" className={styles["contact-btn"]}>Contact</a>
		</div>
	)
}
