import { useState } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import Project from '@components/Project'
import Pagination from '@components/Pagination'
import styles from '@styles/Portfolio.module.css'

const PER_PAGE = 6

export default function Portfolio({ projects, designs, pagination }) {
	const [tab, setTab] = useState(0)

	return (<>
		<header className={styles.header}>
			<h1>My Portfolio</h1>
		</header>
		<div className={styles["switch-container"]}>
			<div className={styles.switch}>
				<p className={ tab === 0 ? styles.active : ''} onClick={() => setTab(0)}>Code</p>
				<p className={ tab === 1 ? styles.active : ''} onClick={() => setTab(1)}>Design</p>
			</div>
		</div>
		<div className={styles.grid}>
			{tab === 0 ?
				projects.map((project, index) => <Project {...project} key={index}/>)
			 : designs.map((design, index) => <Project {...design} key={index} />)
			}
		</div>
		<div className={styles.pagination}>
			<Pagination {...pagination} />
		</div>
	</>)
}

export async function getStaticProps({ params: { page }}) {
	const filesInProjects = fs.readdirSync('./content/projects')
	const filesInDesigns = fs.readdirSync('./content/designs')
	const largestLength = Math.max(filesInDesigns.length, filesInProjects.length)

	const projects = filesInProjects.map(file => {
		return matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
	})

	const designs = filesInDesigns.map(file => {
		return matter(fs.readFileSync(`./content/designs/${file}`, 'utf8')).data
	})

	const pages = Math.ceil(largestLength / PER_PAGE)

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

	const projectsInThisPage = projects.slice((page-1) * PER_PAGE, page * PER_PAGE)
	const designsInThisPage = designs.slice((page-1) * PER_PAGE, page * PER_PAGE)

	return {
		props: {
			projects: projectsInThisPage,
			designs: designsInThisPage,
			pagination: {
				nextPage: page < pages,
				prevPage: page > 1,
				nextPages,
				prevPages,
				lastPage: pages,
			},
			title: 'Projects',
			subtitle: 'From web apps to games, check out my latest projects.',
			headData: {
				headtitle: 'Siddharth Roy | Projects'
			}
		}
	}
}

export async function getStaticPaths() {
	const filesInProjects = fs.readdirSync('./content/projects')
	const filesInDesigns = fs.readdirSync('./content/designs')
	const largestLength = Math.max(filesInDesigns.length, filesInProjects.length)

	const numberOfPages = Math.ceil(largestLength / PER_PAGE)
	let paths = []

	for (let i = 1; i <= numberOfPages; i++) {
		paths.push({params:{page:i.toString()}})
	}

	return {
		paths,
		fallback: false
	}
}
