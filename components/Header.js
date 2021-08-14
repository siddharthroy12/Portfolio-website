import Link from 'next/link'
import { VscHome, VscAccount, VscCode } from 'react-icons/vsc'
import { BsPen } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<div className={styles.container}>
			<p className={styles.initials}>SR</p>
			<nav className={styles.nav}>
				<ul>
					<li className={styles.navItem}>
						<Link href="/#top">
							<a>
								<div className={styles.navIconContainer}>
									<VscHome className={styles.navItemIcon}/>
								</div>
								<span className={styles.navItemText}>Home</span>
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/#about">
							<a>
								<div className={styles.navIconContainer}>
									<VscAccount className={styles.navItemIcon}/>
								</div>
								<span className={styles.navItemText}>About</span>
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<div className={styles.navIconContainer}>
							<VscCode className={styles.navItemIcon}/>
						</div>
						<span className={styles.navItemText}>Work</span>
					</li>
					<li className={styles.navItem}>
						<div className={styles.navIconContainer}>
							<BsPen className={styles.navItemIcon}/>
						</div>
						<span className={styles.navItemText}>Blog</span>
						
					</li>
					<li className={styles.navItem}>
						<div className={styles.navIconContainer}>
							<AiOutlinePhone className={styles.navItemIcon}/>
						</div>
						<span className={styles.navItemText}>Contact</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
