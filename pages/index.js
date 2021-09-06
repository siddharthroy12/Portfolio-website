import Head from 'next/head'
import Project from '../components/Project'
import BlogEntry from '@components/BlogEntry'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'

const highlights = [
  'front-end',
  'web',
  'developer'
]

const shouldHighlight = (word) => {
  let result = false
  highlights.map(highlight => {
    if (highlight.toLowerCase() === word.toLowerCase()) {
      result = true
    }
  })
  return result
}

const highlightBio = (bio) => {
  const words = bio.split(' ')
  const output = words.map(word => {
    if (shouldHighlight(word)) {
      return <span className={styles.highlight} key={word}>{word}{' '}</span>
    } else {
      return <span key={word}>{word}{' '}</span>
    }
  })

  return output
}

export default function Home({ projects, blogs, frontmatter }) {
  return (<>
    <Head>
      <title>{frontmatter.name} - Web developer</title>
      <meta
        name="description"
        content={frontmatter.smallbio}
      />
    </Head>
    <Section title="Featured Projects" subtitle="Browse my favourite projects." className="grid">
      {projects.map((project, index) => <Project {...project} key={index} />)}
    </Section>
    <Section title="Popular Articles" className={styles['articles']}>
      {blogs.map((blog, index) => <BlogEntry blog={blog} key={index} />)}
      <div className="mt">
        <Link href="/blogs/1"><a className="btn btn-outline">View All</a></Link>
      </div>
    </Section>
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
      headData: frontmatter,
    }
  }
}