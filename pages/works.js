import fs from 'fs'
import matter from 'gray-matter'
import Section from '@components/Section'
import Project from '@components/Project'
import Layout from '@components/Layout'
import styles from '@styles/Works.module.css'
import { getAuthorPic } from 'utils'

export default function Works({ projects, authorPic }) {
	return (
		<Layout authorPic={authorPic}>
			<Section title="All Projects" subtitle="Here are my" smallMargin>
				<div className={styles.flexGrid}>
				{projects.map((project, index) => <Project {...project} compact key={index}/>)}
				</div>
			</Section>
		</Layout>
	)
}

export async function getStaticProps() {
	const filesInProjects = fs.readdirSync('./content/projects')
  const projects = filesInProjects.map(file => {
    return matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
  })
  return {
    props: {
      projects,
			authorPic: getAuthorPic()
    }
  }
}
