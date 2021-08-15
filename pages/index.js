import Head from 'next/head'
import Image from 'next/image'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import Project from '../components/Project'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'
import fs from 'fs'
import matter from 'gray-matter'

export default function Home({ projects, frontmatter }) {
  const highlightBio = (bio) => {
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

  return (<>
    <Head>
      <title>{frontmatter.name} - Web developer</title>
      <meta
        name="description"
        content={frontmatter.smallbio}
      />
    </Head>
    <header className={styles.heroContainer} id="top">
      <div className={styles.heroImageContainer}>
        <Image
          src="/uploads/profilepic.jpeg"
          alt="Picture of the developer"
          width="350"
          height="350"
          layout="fixed"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroDescription}>
        <p className={styles.greeting}>HI THERE! I&apos;M</p>
        <h1 className={styles.name}>
          <span className={styles.highlight}>{frontmatter.name.split(' ')[0]}</span>{' '}
          {frontmatter.name.split(' ')[1]}
        </h1>
        <p className={styles.smallBio}>
          {highlightBio(frontmatter.smallbio)}
        </p>
        <div className={styles.heroButtons}>
          <a className="button" href="#works">Works</a>
          <div className={styles.heroIcons}>
            <FaReact />
            <SiTypescript />
            <FaNodeJs />
          </div>
        </div>
      </div>
    </header>
    <Section title="About me" subtitle="more" id="about">
      <p className={styles.aboutMe}>
        {frontmatter.about}
      </p>
    </Section>
    <Section
      title="Featured Projects"
      subtitle="check out My"
      className={styles.featuredProjects}
    >
      {projects.map((project, index) => {
        return <Project {...project} flip={index % 2 !== 0} key={index}/>
      })}
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

  console.log(projects)

  const frontmatter = matter(fs.readFileSync('./content/_index.md', 'utf8')).data
  return {
    props: {
      projects,
      frontmatter
    }
  }
}