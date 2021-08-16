import Image from 'next/image'
import Link from 'next/link'
import { VscHome, VscAccount, VscCode } from 'react-icons/vsc'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPen } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.toggleBtn}>
				<AiOutlineMenu />
			</div>
			<div className={styles.initials}>
				<div className={styles.picContainer}>
					<Image
						src="/uploads/profilepic.jpeg"
						width="60"
						height="60"
						className={styles.profilePic}
						layout="fixed"
						alt="Dev's Picture"
					/>
				</div>
				<span className={styles.emoji}>ヽ(￣～￣　)ノ</span>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li className={styles.navItem}>
						<Link href="/">
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
						<Link href="/works">
							<a>
								<div className={styles.navIconContainer}>
									<VscCode className={styles.navItemIcon}/>
								</div>
								<span className={styles.navItemText}>Works</span>
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/#about">
							<a>
								<div className={styles.navIconContainer}>
									<BsPen className={styles.navItemIcon}/>
								</div>
								<span className={styles.navItemText}>Blog</span>
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/#about">
							<a>
								<div className={styles.navIconContainer}>
									<AiOutlinePhone className={styles.navItemIcon}/>
								</div>
								<span className={styles.navItemText}>Contact</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
