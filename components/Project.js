import Image from 'next/image'
import styles from '../styles/Project.module.css'

export default function Project({ 
	title, preview, code, live,
}) {
	return (
		<div className={styles.container}>
			<div className={styles["image-container"]}>
				<Image
					src="/uploads/screenshot-1.png"
					layout="fill"
				/>
			</div>
			<p className={styles.title}>Project Name</p>
		</div>
	)
}
