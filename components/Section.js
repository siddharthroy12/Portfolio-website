import styles from '../styles/Section.module.css'

export default function Section({ children, title, id, className, }) {
	return (
		<section className={styles.container} id={id}>
			<h2 className={styles.title}>{title}</h2>
			<div className={`${styles.childrenContainer} ${className}`}>
				{children}
			</div>
		</section>
	)
}
