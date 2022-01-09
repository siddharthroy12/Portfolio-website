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
			<nav>
				<ul>
					<li><Link href="/">Home</Link></li>
				</ul>
			</nav>
		</div>
	)
}
