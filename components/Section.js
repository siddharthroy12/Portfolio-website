import styles from '../styles/Section.module.css'

export default function Section({ children, title, subtitle, id, className }) {
	return (
		<section className={styles.container} id={id}>
			<div className={styles.titleContainer}>
				<div className={styles.line} />
				<span className={styles.subtitle}>{subtitle}</span>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<div className={`${styles.childrenContainer} ${className}`}>
				{children}
			</div>
		</section>
	)
}
