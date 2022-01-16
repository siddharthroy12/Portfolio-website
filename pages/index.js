import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Project from '../components/Project'
import SendIcon from '../components/icons/Send'
import InstagramIcon from '../components/icons/Instagram'
import GithubIcon from '../components/icons/Github'
import TwitterIcon from '../components/icons/Twitter'
import AtIcon from '../components/icons/At'
import fs from 'fs'
import matter from 'gray-matter'

export default function Home({ projects, designs, frontmatter}) {
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
			<section id="about" className={styles.about + ' ' + styles.section}>
				<div className={styles.about__left}>
					<h2 className={styles["section-header"]+' '+styles.about__header}>About Me</h2>
					<p className={styles.about__paragraph}>{frontmatter.about}</p>
				</div>
				<div className={styles.divider} />
				<div className={styles.about__right}>
					<img src="/BrandLogo.svg" alt="Brand Logo"/>
				</div>
			</section>
			<section id="skills" className={styles.skills + ' ' + styles.section}>
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
			<section id="techprojects" className={styles.section}>
				<h2 className={styles.tech__header + ' ' + styles["section-header"] + ' ' + styles["margin-bottom"]}>
					Technical Projects
				</h2>
				<div className={styles["project-list"]}>
					{ projects.map(project => <Project {...project}/>)}
				</div>
			</section>
			<section id="designprojects" className={styles.section}>
				<h2 className={styles.design__header + ' ' + styles["section-header"] + ' ' + styles["margin-bottom"]}>
					Design Projects
				</h2>
				<div className={styles["project-list"]}>
					{ designs.map(project => <Project {...project}/>)}
				</div>
			</section>
			<section id="contact"  className={styles.section}>
				<h2 className={styles.contact__header + ' ' + styles["section-header"] + ' ' + styles["margin-bottom"]}>
					Contact
				</h2>
				<div className={styles["contact-box"]}>
					<form className={styles["contact-box__left"]} data-netlify="true" method="POST" action="/#formsuccess">
						<label htmlFor="name">
							Name
						</label>
						<input type="text" id="name" name="name" required placeholder="Name" />
						<label htmlFor="email">
							Email
						</label>
						<input type="email" id="email" name="email" required placeholder="Email" />
						<label htmlFor="message">
							Message
						</label>
						<textarea name="message" id="message"  required placeholder="Message"/>
						<button type="submit" className={styles["submit-button"]}>
							<SendIcon />
								Submit
						</button>
					</form>
					<div className={styles["contact-box__right"]}>
						<p>Contact me using this form or email me at <a href={`mailto:${frontmatter.email}`}>{frontmatter.email}</a></p>
						<div className={styles["social-icons"]}>
							<a href="https://www.instagram.com/siddharthroy12" target="_blank" rel="noreferrer">
								<InstagramIcon />
							</a>
							<a href="https://github.com/siddharthroy12" target="_blank" rel="noreferrer">
								<GithubIcon />
							</a>
							<TwitterIcon />
						</div>
						<div className={styles["icon-container"]}>
							<AtIcon />
						</div>
					</div>
				</div>
			</section>
		</main>
	</>)
}

export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./content/projects')
  const filesInDesigns = fs.readdirSync('./content/designs')
  let projects = []
  let designs = []

  filesInProjects.forEach((file) => {
    const data = matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
    if (data.featured) {
      projects.push(data)
    }
  })

  filesInDesigns.forEach((file) => {
    const data = matter(fs.readFileSync(`./content/designs/${file}`, 'utf8')).data
    if (data.featured) {
      designs.push(data)
    }
  })

  const frontmatter = matter(fs.readFileSync('./content/_index.md', 'utf8')).data

  return {
    props: {
      projects,
      designs,
      frontmatter,
    }
  }
}
