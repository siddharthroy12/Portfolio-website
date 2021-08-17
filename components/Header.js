import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VscHome, VscAccount, VscCode } from 'react-icons/vsc'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPen } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import randomEmoji from '../utils/randomEmoji'
import styles from '../styles/Header.module.css'

export default function Header({ authorPic }) {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false)
	return (<>
		<button className={styles.toggleBtn} onClick={() => setIsHeaderOpen(prev => !prev)}>
			<AiOutlineMenu />
		</button>
		<div className={`${styles.container} ${isHeaderOpen && styles.containerOpen}`}>
			<div className={styles.initials}>
				<div className={styles.picContainer}>
					<Image
						src={authorPic}
						width="60"
						height="60"
						className={styles.profilePic}
						layout="fixed"
						alt="Dev's Picture"
					/>
				</div>
				<span className={styles.emoji}>{randomEmoji()}</span>
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
						<Link href="/blog">
							<a>
								<div className={styles.navIconContainer}>
									<BsPen className={styles.navItemIcon}/>
								</div>
								<span className={styles.navItemText}>Blog</span>
							</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/#contact">
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
	</>)
}
