import Header from './Header'
import styles from '../styles/Layout.module.css'
import { SiNetlify, SiNextDotJs } from 'react-icons/si'
import Head from 'next/head'

export default function Layout({ children, headData }) {
	return (
		<>
			<Head>
				<title>{headData.headtitle}</title>
				<meta name="description" content={headData.headdescription} />
			</Head>
			<Header headData={headData} />
			<div className={`${styles.container} ${styles.content}`} id="top">
				{children}
			</div>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<p>
						Siddharth Roy © {new Date().getFullYear()}
					</p>
					<p>
						Built using <SiNextDotJs /> Hosted on <SiNetlify />
					</p>
				</div>
			</footer>
		</>
	)
}