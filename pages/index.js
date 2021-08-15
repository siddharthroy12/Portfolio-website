import Head from 'next/head'
import Image from 'next/image'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import Layout from '../components/Layout'
import Project from '../components/Project'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'
import fs from 'fs'
import matter from 'gray-matter'

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Siddharth Roy - Web developer</title>
        <meta
          name="description"
          content={`
            A Front-End Web Developer passionate about creating interactive
            applications and experiences on the web.
          `}
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
          <p className={styles.greeting}>HI THERE! I'M</p>
          <h1 className={styles.name}>
            <span className={styles.highlight}>Siddharth</span> Roy
          </h1>
          <p className={styles.smallBio}>
            A <span className={styles.highlight}>Front-End Web Developer</span>{' '}
            passionate about creating interactive applications
            and experiences on the web.
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
          I'm a front-end web developer with a background in computer
          systems and network infrastructure.
          My 8 years of IT experience has given me a strong foundation
          for web development and building complex solutions.
          Recently, I graduated from the Juno College Immersive
          Web Development Bootcamp. I am passionate about coding and
          solving problems through code, and I am excited to work
          alongside other amazing programmers and learn so much more!
        </p>
      </Section>
      <Section
        title="Featured Projects"
        subtitle="check out My"
        className={styles.featuredProjects}
      >
        {projects.map((project, index) => {
          return <Project {...project} flip={index % 2} key={index}/>
        })}
      </Section>
    </Layout>
  )
}


export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./content/projects')
  const projects = filesInProjects.map(file => {
    const data = matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
    if (data.featured) {
      return data
    }
  })
  return {
    props: {
      projects
    }
  }
}