import Image from 'next/image'
import styles from '../styles/Project.module.css'

export default function Project({ 
	thumbnail, name, info, stack, code, live, flip
}) {
	return (
		<div className={`${styles.container} ${flip && styles.containerFlip}`}>
			<Image
				src="https://raw.githubusercontent.com/siddharthroy12/Agrus/main/screenshots/screenshot-1.png"
				height="300"
				width="500"
				objectFit="cover"
				className={styles.preview}
			/>
			<div className={styles.projectDetails}>
				<h3 className={styles.projectName}>Agrus</h3>
				<div className={styles.projectInfoContainer}>
					<p>
						A reddit like MVP app with authentication, authorization, post with image, video and text, comments,
						boards for communities and much more.
					</p>
				</div>
				<p>
					React, Typescript, Node.js, MongoDB
				</p>
				<div className={styles.projectLinks}>
					<a href="#">Github</a>
					<a href="#">Live</a>
				</div>
			</div>
			{/* His job is to push the perview to get it smaller when the window is resized*/}
			<div className={styles.pushPreview} />
		</div>
	)
}
