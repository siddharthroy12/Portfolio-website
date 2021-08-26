import Header from './Header'
import styles from '../styles/Layout.module.css'
import { SiNetlify, SiNextDotJs } from 'react-icons/si'
import Head from 'next/head'

export default function Layout({ children, headData, title, subtitle, date }) {
	return (
		<>
			<Head>
				<title>
					{headData?.headtitle ? headData.headtitle : title}
				</title>
				<meta 
					name="description"
					content={headData?.headdescription ? headData.headdescription : subtitle}
				/>
			</Head>
			<Header headData={headData} title={title} subtitle={subtitle} date={date}/>
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