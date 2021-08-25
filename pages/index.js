import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { VscLinkExternal } from 'react-icons/vsc'
import { RiTwitterLine } from 'react-icons/ri'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import Project from '../components/Project'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'
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


export default function Home({ projects, frontmatter }) {
  return (<>
    <Head>
      <title>{frontmatter.name} - Web developer</title>
      <meta
        name="description"
        content={frontmatter.smallbio}
      />
    </Head>
    <Section title="About">

    </Section>
  </>)
}

export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./content/projects')
  let projects = []

  filesInProjects.forEach((file) => {
    const data = matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
    if (data.featured) {
      projects.push(data)
    } 
  })

  const frontmatter = matter(fs.readFileSync('./content/_index.md', 'utf8')).data
  return {
    props: {
      projects,
      frontmatter,
      headData: frontmatter
    }
  }
}