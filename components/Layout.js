import Header from './Header'
import styles from '../styles/Layout.module.css'
import Head from 'next/head'

export default function Layout({ children, frontData }) {
	return (
		<>
			<Head>
				<title>{frontData.headtitle}</title>
				<meta name="description" content={frontData.headdescription} />
			</Head>
			<Header authorPic={frontData.picture} />
			<div className={styles.sidePush}>
				<div className={styles.container}>
					{children}
				</div>
			</div>
		</>
	)
}