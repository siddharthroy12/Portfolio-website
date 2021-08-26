import Image from 'next/image'
import styles from '../styles/Project.module.css'

export default function Project({ 
	title, desc, stack, preview, code, live,
}) {
	return (
		<div className={styles['container']}>
			<div className={styles['image-container']}>
				<Image
					src={preview}
					height="180"
					width="360"
					layout="responsive"
					alt="Project preview"
				/>
			</div>
			<div className={styles['stack']}>
				{stack.map((i, index) => <span key={index}>{i}</span>)}
			</div>
			<div className={styles['details']}>
				<p className={styles['title']}>{title}</p>
				<p className={styles['desc']}>{desc}</p>
			</div>
			<div className={styles['links']}>
				<a href={code} target="_blank" rel="noopener noreferrer">Code</a>
				<a href={live} target="_blank" rel="noopener noreferrer">Live</a>
			</div>
		</div>
	)
}
