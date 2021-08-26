import fs from 'fs'
import matter from 'gray-matter'
import Project from '@components/Project'
import Pagination from '@components/Pagination'

const PER_PAGE = 6

export default function Works({ projects, pagination }) {
	return (<>
		<div className="grid mt">
			{projects.map((project, index) => <Project {...project} key={index}/>)}
		</div>
		<div className="mt center">
			<Pagination {...pagination} />
		</div>
	</>)
}

export async function getStaticProps({ params: { page }}) {
	const filesInProjects = fs.readdirSync('./content/projects')
  
	const projects = filesInProjects.map(file => {
    return matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
  })

	const pages = Math.ceil(filesInProjects.length / PER_PAGE)

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

  return {
    props: {
      projects: projectsInThisPage,
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
	const numberOfPages = Math.ceil(filesInProjects.length / PER_PAGE)
	let paths = []

	for (let i = 1; i <= numberOfPages; i++) {
		paths.push({params:{page:i.toString()}})
	}

	return {
		paths,
		fallback: false
	}
}