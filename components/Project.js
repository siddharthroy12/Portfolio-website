import Image from 'next/image'
import styles from '../styles/Project.module.css'
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc'

export default function Project({ 
	title, desc, stack, preview, code, live, flip
}) {
	return (
		<div className={`${styles.container} ${flip && styles.containerFlip}`}>
			<div className={styles.previewContainer}>
				<Image
					src={preview}
					height="300"
					width="500"
					objectFit="cover"
					className={styles.preview}
					alt="Project's Preview"
				/>
				<div className={styles.previewOverlay}>

				</div>
			</div>
			<div className={styles.projectDetails}>
				<h3 className={styles.projectName}>{title}</h3>
				<div className={styles.projectInfoContainer}>
					<p>
						{desc}
					</p>
				</div>
				<p className={styles.stack}>
					{stack.map(x => <span key={x}>{x}</span>)}
				</p>
				<div className={`${styles.projectLinks} ${flip && styles.projectLinksFlip}`}>
					<a href={code}><VscGithubAlt /></a>
					<a href={live}><VscLinkExternal /></a>
				</div>
			</div>
			{/* His job is to push the perview to get it smaller when the window is resized*/}
			<div className={styles.pushPreview} />
		</div>
	)
}
