import Image from 'next/image'
import styles from '../styles/Project.module.css'

export default function Project({ 
	title, preview, code, live,
}) {
	return (
		<div className={styles.container}>
			<div className={styles.container__top}>
				<div className={styles["image-container"]}>
					<Image
						src={preview}
						layout="fill"
					/>
				</div>
				<div className={styles.links}>
					<a href={live} target="_blank" rel="noreferrer"><img src="/open.svg" className={styles.icon} /></a>
					{code && (
						<a href={code} target="_blank" rel="noreferrer"><img src="/code2.svg" className={styles.icon} /></a>
					)}
				</div>
			</div>
			<p className={styles.title}>{title}</p>
		</div>
	)
}
