import Head from 'next/head'
import Image from 'next/image'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'

export default function Home() {
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
      <header className={styles.heroContainer}>
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
      <Section title="title" subtitle="subtitle">
        hello
      </Section>
    </Layout>
  )
}
