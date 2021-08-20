import Header from './Header'
import styles from '../styles/Layout.module.css'
import { SiNetlify, SiNextDotJs } from 'react-icons/si'
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
				<div className={styles.container} id="top">
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
			</div>
		</>
	)
}