import Header from './Header'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, authorPic }) {
	return (
		<>
			<Header authorPic={authorPic} />
			<div className={styles.sidePush}>
				<div className={styles.container}>
					{children}
				</div>
			</div>
		</>
	)
}