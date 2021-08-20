import fs from 'fs'
import matter from 'gray-matter'
import { inPlaceSort } from 'fast-sort'
import withFrontData from '@utils/withFrontData'
import Section from '@components/Section'
import getHumanDate from '@utils/getHumanDate'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import styles from '@styles/Blogs.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BLOGS_PER_PAGE = 5

const BlogsPage = ({ blogs, nextPage, prevPage, nextPages, prevPages, lastPage }) => {
	const router = useRouter()
	const { page } = router.query
  return (<Section title="Blogs" subtitle="My Dev Blogs" smallMargin>
		{blogs.map(blog => (
			<article className={styles.card} key={blog.slug}>
				<Link href={`/blog/${blog.slug}`}>
					<a>
						<header>
						<h2 className={styles.name}>
							{blog.title}
						</h2>
						</header>
						<p className={styles.description}>{blog.description}</p>
						<p className={styles.date}>{getHumanDate(blog.date)}</p>
					</a>
				</Link>
			</article>
		))}
		<div className={styles.pagination}>
			<ul>
				{prevPage && <li>
					<Link href={`/blogs/${Number(page)-1}`}><a>
						<GrFormPrevious />
					</a></Link>
				</li>}
				{prevPages.length !== 0 && prevPages[0] !== 1 && (<>
					<li>
						<Link href={`/blogs/1`}>
							<a>1</a>
						</Link>
					</li>
					{prevPages[0] !== 2 && (
						<li>
							<span>...</span>
						</li>
					)}
				</>)}
				{prevPages.map(num => (<li key={num}>
					<Link href={`/blogs/${num}`}>
						<a>{num}</a>
					</Link>
				</li>))}
				<li className={styles.active}>{page}</li>
				{nextPages.map(num => (<li key={num}>
					<Link href={`/blogs/${num}`}>
						<a>{num}</a>
					</Link>
				</li>))}
				{nextPages.length !== 0 && nextPages[nextPages.length-1] !== lastPage && (<>
					{nextPages[nextPages.length-1] !== lastPage-1 && (
						<li>
							<span>...</span>
						</li>
					)}
					<li>
						<Link href={`/blogs/${lastPage}`}>
							<a>{lastPage}</a>
						</Link>
					</li>
				</>)}
				{nextPage && <li>
					<Link href={`/blogs/${Number(page)+1}`}><a>
						<GrFormNext />
					</a></Link>
				</li>}
			</ul>
		</div>
	</Section>)
}

export default BlogsPage

export async function getStaticProps({ params: { page } }) {
	const filesInBlogs = fs.readdirSync('./content/blogs')

	let blogs = filesInBlogs.map(filename => {
		const data = matter(fs.readFileSync(`./content/blogs/${filename}`, 'utf8')).data
		return {
			...data,
			slug: filename.slice(0, filename.indexOf('.'))
		}
	})

	const pages = Math.ceil(filesInBlogs.length / BLOGS_PER_PAGE)

	let nextPages = []

	for (let i = Number(page)+1; i <= pages; i++) {
		if (i > Number(page)+4) {
			break
		}
		nextPages.push(i)
	}

	let prevPages = []

	for (let i = Number(page)-1; i >= 1; i--) {
		if (i < Number(page)-4) {
			break
		}
		prevPages.unshift(i)
	}

	inPlaceSort(blogs).desc(blog => blog.date)
	const blogsInThisPage = blogs.slice((page-1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE)

	return withFrontData({
		props: {
			blogs: JSON.parse(JSON.stringify(blogsInThisPage)),
			nextPage: page < pages,
			prevPage: page > 1,
			nextPages,
			prevPages,
			lastPage: pages
		}
	})
}

export async function getStaticPaths() {
	const filesInProjects = fs.readdirSync('./content/blogs')
	const numberOfPages = Math.ceil(filesInProjects.length / BLOGS_PER_PAGE)
	let paths = []

	for (let i = 1; i <= numberOfPages; i++) {
		paths.push({params:{page:i.toString()}})
	}

	return {
		paths,
		fallback: false
	}
}