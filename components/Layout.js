import Navbar from '../components/Navbar'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				{children}
			</div>
		</>
	)
}
