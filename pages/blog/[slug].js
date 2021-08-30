import matter from 'gray-matter'
import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import styles from '@styles/Blog.module.css'

export default function Blog({ markdown }) {
  return (<div className={styles.wrapper}>
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkSlug]}
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
		<div id="disqus_thread"></div>
		<script dangerouslySetInnerHTML={{
			__html:`
				(function() { // DON'T EDIT BELOW THIS LINE
					var d = document, s = d.createElement('script');
					s.src = 'https://siddharth-roy.disqus.com/embed.js';
					s.setAttribute('data-timestamp', +new Date());
					(d.head || d.body).appendChild(s);
				})();
			`
		}}>
		</script>
	</div>)
}

export async function getStaticProps({ params: { slug } }) {
	const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
	let frontmatter = fileContent.data
	const markdown = fileContent.content
	return {
		props: { 
			markdown,
			title: frontmatter.title,
			subtitle: frontmatter.description,
			date: frontmatter.date
		}
	}
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