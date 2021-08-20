import matter from 'gray-matter'
import fs from 'fs'
import withFrontData from '@utils/withFrontData'
import ReactMarkdown from 'react-markdown'
import getHumanDate from '@utils/getHumanDate'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import styles from '@styles/Blog.module.css'

export default function Blog({ frontmatter, markdown }) {
  return (<div className={styles.wrapper}>
		<h1 className={styles.title}>{frontmatter.title}</h1>
		<p className={styles.date}>{frontmatter.date}</p>
		<hr />
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				code({node, inline, className, children, ...props}) {
					const match = /language-(\w+)/.exec(className || '')
					return !inline && match ? (
						<SyntaxHighlighter
							style={atomDark}
							language={match[1]}
							PreTag="div"
							{...props}
						>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					)
				}
			}}
		>
			{markdown}
		</ReactMarkdown>
	</div>)
}

export async function getStaticProps({ params: { slug } }) {
	const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
	let frontmatter = fileContent.data
	const markdown = fileContent.content
	frontmatter.date = getHumanDate(frontmatter.date)
	return withFrontData({
		props: { frontmatter, markdown }
	})
}

export async function getStaticPaths() {
	const filesInProjects = fs.readdirSync('./content/blogs')

	const paths = filesInProjects.map(file => {
		const filename = file.slice(0, file.indexOf('.'))
		return { params: { slug: filename }}
	})

	return {
		paths, fallback: false
	}
}