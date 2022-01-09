import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.brand}>
				<img src="/BrandLogo.svg" alt="BrandIcon" className={styles.brandlogo}/>
				<p className={styles.brandname}>SiddharthRoy</p>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li className={styles.active}><Link href="/">Home</Link></li>
					<li><Link href="/portfolio">Portfolio</Link></li>
					<li><Link href="/blogs">Blogs</Link></li>
					<li><Link href="/templates">Templates</Link></li>
				</ul>
			</nav>
			<a href="#contact" className={styles["contact-btn"]}>Contact</a>
		</div>
	)
}
