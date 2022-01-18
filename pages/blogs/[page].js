import fs from 'fs'
import matter from 'gray-matter'
import { inPlaceSort } from 'fast-sort'
import BlogEntry from '@components/BlogEntry'
import Pagination from '@components/Pagination'
import styles from '@styles/Blogs.module.css'

const BLOGS_PER_PAGE = 6

const BlogsPage = ({ blogs, pagination }) => {
	return (<>
	<header className={styles.header}>
		<h1>Checkout my blogs on Javascript, React and Web development</h1>
	</header>
	<div className={styles.list}>
		{blogs.map((blog, index) => (
			<BlogEntry blog={blog} key={index} />
		))}
		<Pagination {...pagination} />
	</div>
		</>)
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

	return {
		props: {
			blogs: blogsInThisPage,
			pagination: {
				nextPage: page < pages,
				prevPage: page > 1,
				nextPages,
				prevPages,
				lastPage: pages,
			},
			title: 'Siddharth Roy\'s Blog',
			subtitle: 'I write about web development, React, Javascript, C.',
			headData: {
				headtitle: 'Siddharth Roy | Blogs'
			}
		}
	}
}

export async function getStaticPaths() {
	const filesInBlogs = fs.readdirSync('./content/blogs')
	const numberOfPages = Math.ceil(filesInBlogs.length / BLOGS_PER_PAGE)
	let paths = []

	for (let i = 1; i <= numberOfPages; i++) {
		paths.push({params:{page:i.toString()}})
	}

	return {
		paths,
		fallback: false
	}
}
