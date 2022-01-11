import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'

export default function Home({ projects, blogs, frontmatter, headData }) {
	return (<>
		<Head>
			<title>{frontmatter.headtitle}</title>
			<meta
				name="description"
				content={frontmatter.headdescription}
			/>
		</Head>
		<header className={styles.header}>
			<div className={styles.header__left}>
				<h1>{frontmatter.smallbio}</h1>
				<div className={styles.header__left__cta}>
					<a href="#about" className={styles["cta-link"]}>About Me</a>
					<a href="#contact" className={styles["cta-link-special"]}>Contact</a>
				</div>
			</div>
			<div className={styles.header__right}>
				<img className={styles.header__right__illustration} src="/illustration.svg" alt="hero-illustration"/>
			</div>
		</header>
	</>)
}

export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./content/projects')
  const filesInBlogs = fs.readdirSync('./content/blogs')
  let projects = []
  let blogs = []

  filesInProjects.forEach((file) => {
    const data = matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
    if (data.featured) {
      projects.push(data)
    }
  })

  filesInBlogs.forEach((file) => {
    const data = matter(fs.readFileSync(`./content/blogs/${file}`, 'utf8')).data
    if (data.featured) {
      blogs.push({
        ...data,
        slug: file.slice(0, file.indexOf('.'))
      })
    }
  })

  const frontmatter = matter(fs.readFileSync('./content/_index.md', 'utf8')).data
  return {
    props: {
      projects,
      blogs,
      frontmatter,
    }
  }
}
