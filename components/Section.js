import styles from '../styles/Section.module.css'

export default function Section({ children, title }) {
	return (
		<section className={styles.container}>
			{title}
			{children}
		</section>
	)
}
