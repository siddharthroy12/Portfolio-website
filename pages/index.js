import fs from 'fs'
import matter from 'gray-matter';
import styles from '../styles/Home.module.css';
import SectionHeading from '../components/SectionHeading';
import Section from '../components/Section';
import { InstagramEmbed } from 'react-social-media-embed';


export default function Home({ projects }) {
  return (<div>
    <header>
      <h1 className={styles.introduction}>Hi, I&apos;m Siddharth Roy</h1>
    </header>
    <p className={styles.about}>
      I&apos;m a Front-end developer with some experience in back-end.
      I run a mini-blog on Instagram with over 20k Followers.
      And In my free time, I like to learn new languages and frameworks.
    </p>
    <div className={styles.timeline}>
      <SectionHeading heading="Projects" first/>
      {projects.map(project => (<div key={project.title}>
        <SectionHeading heading={project.title} subSection/>
        <Section>
          <p>{project.desc}</p>
          <img src={project.preview} alt="Project preview"/>
          <a href={project.live} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
            Live
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"/>
              <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"/>
            </svg>
            Source Code
          </a>
        </Section>
      </div>))}
      <SectionHeading heading="Popular Posts"/>
      <SectionHeading heading="How to get good at LeetCode" subSection/>
      <Section>
        <InstagramEmbed url="https://www.instagram.com/p/Cf6rtHOrLyY/" width="100%" style={{ maxWidth: 328 }} />
      </Section>
      <SectionHeading heading="Intro to Functional Programming" subSection/>
      <Section>
        <InstagramEmbed url="https://www.instagram.com/p/CfocKnWpuTq/" width="100%" style={{ maxWidth: 328 }}  />
      </Section>
      <SectionHeading heading="Intro to Functional Programming" subSection/>
      <Section>
        <InstagramEmbed url="https://www.instagram.com/p/CftBVLHp7sp/" width="100%" style={{ maxWidth: 328 }} />
      </Section>
      <SectionHeading heading="package-lock.json Explained" subSection last/>
      <Section last>
        <InstagramEmbed url="https://www.instagram.com/p/CchVk2fMppe/" width="100%" style={{ maxWidth: 328 }} />
      </Section>
    </div>
  </div>);
}


export async function getStaticProps() {
  // List of files in blgos folder
  const filesInProjects = fs.readdirSync('./content/projects')

  // Get the front matter and slug (the filename without .md) of all files
  const projects = filesInProjects.map(filename => {
    const file = fs.readFileSync(`./content/projects/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
    }
  })

  return {
    props: {
      projects
    }
  }
}
