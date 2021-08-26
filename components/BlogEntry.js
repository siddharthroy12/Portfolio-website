import Link from 'next/link'
import styles from '@styles/BlogEntry.module.css'

export default function BlogEntry({ blog }) {
	return (
		<article className={styles.card} key={blog.slug}>
			<Link href={`/blog/${blog.slug}`}>
				<a>
					<p className={styles.date}>{blog.date}</p>
					<header>
					<h2 className={styles.name}>
						{blog.title}
					</h2>
					</header>
					<p className={styles.description}>{blog.description}</p>
				</a>
			</Link>
		</article>
	)
}
