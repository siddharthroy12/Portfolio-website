import Header from './Header'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div style={{marginLeft: '6rem'}}>
			<div className={styles.container}>
				{children}
			</div>
			</div>
		</>
	)
}
