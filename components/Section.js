import styles from '../styles/Section.module.css'

export default function Section({ children, title, id }) {
	return (
		<section className={styles.container} id={id}>
			<div className={styles.titleContainer}>
				<div className={styles.line} />
				<span className={styles.title}>{title}</span>
			</div>
			<div className={styles.childrenContainer}>
				{children}
			</div>
		</section>
	)
}
