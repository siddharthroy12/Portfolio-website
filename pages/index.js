import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Project from '../components/Project'
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
				<h1>I <span className={styles.highlight}>Design</span> and <span className={styles.highlight}>Develop</span> apps and websites</h1>
				<div className={styles.header__left__cta}>
					<a href="#about" className={styles["cta-link"]}>About Me</a>
					<a href="#contact" className={styles["cta-link-special"]}>
						Contact
						<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.997 11.997C20.5477 11.4464 20.5477 10.5536 19.997 10.003L11.0238 1.0298C10.4732 0.479157 9.58044 0.479157 9.0298 1.0298C8.47916 1.58044 8.47916 2.4732 9.0298 3.02384L17.006 11L9.0298 18.9762C8.47916 19.5268 8.47916 20.4196 9.0298 20.9702C9.58043 21.5208 10.4732 21.5208 11.0238 20.9702L19.997 11.997ZM-1.23266e-07 12.41L19 12.41L19 9.59L1.23266e-07 9.59L-1.23266e-07 12.41Z" fill="#272727"/>
						</svg>
					</a>
				</div>
			</div>
			<div className={styles.header__right}>
				<img className={styles.header__right__illustration} src="/illustration.svg" alt="hero-illustration"/>
			</div>
		</header>
		<main>
			<section id="#about" className={styles.about + ' ' + styles.section}>
				<div className={styles.about__left}>
					<h2 className={styles["section-header"]+' '+styles.about__header}>About Me</h2>
					<p className={styles.about__paragraph}>{frontmatter.about}</p>
				</div>
				<div className={styles.divider} />
				<div className={styles.about__right}>
					<img src="/BrandLogo.svg" alt="Brand Logo"/>
				</div>
			</section>
			<section id="#skills" className={styles.skills + ' ' + styles.section}>
				<h2 className={styles["margin-bottom"] + ' ' + styles.skills__header + ' ' + styles["section-header"]}>
					What I do
				</h2>
				<div className={styles.skills__list}>
					<div className={styles.skill}>
						<div className={styles["skill__icon-container"]}>
							<img className={styles["skill__icon"]} src="/pen.svg" alt="Pen Icon" />
						</div>
						<h3 className={styles["skill__header"]}>UI/UX Design</h3>
						<p className={styles["skill__paragraph"]}>
							I value simple clean and structural design and good user experience.
						</p>
					</div>
					<div className={styles.skill}>
						<div className={styles["skill__icon-container"]}>
							<img className={styles["skill__icon"]} src="/code.svg" alt="Pen Icon" />
						</div>
						<h3 className={styles["skill__header"]}>Web App Developmet</h3>
						<p className={styles["skill__paragraph"]}>
							I like to code things from scratch, and enjoy bringing ideas to life in the browser.
						</p>
					</div>
				</div>
			</section>
			<section id="#techprojects" className={styles.section}>
				<h2 className={styles.tech__header + ' ' + styles["section-header"] + ' ' + styles["margin-bottom"]}>
					Technical Projects
				</h2>
				<div className={styles["project-list"]}>
					<Project />
				</div>
			</section>
		</main>
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
