
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
						<VscHome className={styles.navItemIcon}/>
						<span className={styles.navItemText}>Home</span>
						</li>
					<li className={styles.navItem}>
						<VscAccount className={styles.navItemIcon}/>
						<span className={styles.navItemText}>About</span>
					</li>
					<li className={styles.navItem}>
						<VscCode className={styles.navItemIcon}/>
						<span className={styles.navItemText}>Work</span>
					</li>
					<li className={styles.navItem}>
						<BsPen className={styles.navItemIcon}/>
						<span className={styles.navItemText}>Blog</span>
					</li>
					<li className={styles.navItem}>
						<AiOutlinePhone className={styles.navItemIcon}/>
						<span className={styles.navItemText}>Contact</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
