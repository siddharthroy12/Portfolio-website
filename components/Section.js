import styles from '../styles/Section.module.css'

export default function Section({ children, title, subtitle, id }) {
	return (
		<section className={styles.container} id={id}>
			<div className={styles.titleContainer}>
				<div className={styles.line} />
				<span className={styles.subtitle}>{subtitle}</span>
			</div>
			<p className={styles.title}>{title}</p>
			<div className={styles.childrenContainer}>
				{children}
			</div>
		</section>
	)
}
