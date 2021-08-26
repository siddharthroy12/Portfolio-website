import styles from '../styles/Section.module.css'

export default function Section({ children, title, subtitle, id, className, }) {
	return (
		<section className={styles.container} id={id}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.subtitle}>{subtitle}</p>
			<div className={`${styles.childrenContainer} ${className}`}>
				{children}
			</div>
		</section>
	)
}
