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

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&")
  // }

  // const formSubmitHandler = (e) => {
  //   e.preventDefault()
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "name": e.target.getAttribute("name"),
  //       "email": e.target.getAttribute("email"),
  //       "name": e.target.getAttribute("name"),
  //     })
  //   }).then(() => navigate("/thank-you/")).catch(error => alert(error))
  // }

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
      <Link href='/works'>
        <a className={styles.viewMore}>
          View More <VscLinkExternal />
        </a>
      </Link>
    </Section>
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's have a talk"
    >
      <div className={styles.contactContainer}>
        <form name="contact" className={styles.form} data-netlify="true" method="POST" action="/formsuccess">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Message"
            required
          />
          <button type="submit">Contact us</button>
        </form>
        <div className={styles.contactDetailsContainer}>
          <p className={styles.contactDetailLabel}>Email</p>
          <a
            className={styles.contactDetail}
            href={`mailto:${frontmatter.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {frontmatter.email}
          </a>
          <p className={styles.contactDetailLabel}>Socials</p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/Siddharth_Roy12" target="_blank" rel="noreferrer">
              <RiTwitterLine />
            </a>
            <a href="https://github.com/siddharthroy12" target="_blank" rel="noreferrer">
              <FiGithub />
              </a>
            <a href="https://www.instagram.com/siddharthroy12/" target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
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
      frontmatter
    }
  }
}