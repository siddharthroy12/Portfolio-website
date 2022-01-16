import Navbar from '../components/Navbar'
import UpIcon from '../components/icons/Up'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				{children}
			</div>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<p className={styles.copyright}>
						© Siddharth Roy, 2022
					</p>
					<div className={styles.footer__right}>
						<UpIcon />
						<p>Back To Top</p>
					</div>
				</div>
			</footer>
		</>
	)
}
