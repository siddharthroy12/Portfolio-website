import { useState } from 'react';
import fs from 'fs';
import Image from 'next/image';
import matter from 'gray-matter';
import GithubIcon from '@components/icons/Github';
import InstagramIcon from '@components/icons/Instagram';
import TwitterIcon from '@components/icons/Twitter';
import CodeIcon from '@components/icons/Code';
import WebIcon from '@components/icons/Web';
import DesignIcon from '@components/icons/Design';
import UpRightIcon from '@components/icons/UpRight';
import TickIcon from '@components/icons/Tick';
import Game from '@components/Game';
import styles from '@styles/Home.module.css';

export default function Home({ projects, blogs }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onChoosePlan = () => {
    setMessage("Hi!, I'm -name- from -company-name- and I want you to make a website for me");
  }

  return (<>
    <section className={styles.hero}>
      <div className={styles.hero__left}>
        <span className={styles['hi-message']}>Hi There!</span>
        <h1 className={styles.introduction}>I’m Siddharth Roy</h1>
        <p className={styles.about}>Passionate frontend enginner and designer from India</p>
        <div className={styles.hero__buttons}>
          <a href="#contact" className={styles.button}>
            Connect with me
          </a>
          <a href="https://github.com/siddharthroy12" target="_blank" rel="noreferrer" className={styles['social-button']}>
            <GithubIcon />
          </a>
          <a href="https://www.instagram.com/reactoverflow/" target="_blank" rel="noreferrer" className={styles['social-button']}>
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/reactoverflow" target="_blank" rel="noreferrer" className={styles['social-button']}>
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className={styles.hero__right}>
        <Game />
      </div>
    </section>
    <section className={styles.section} id="about">
      <h2 className={styles.section__heading}>Things I do</h2>
      <div className={styles['flex-box']}>
        <div className={styles['thing-box']}>
          <div className={styles['thing-box__top']}>
            <span className={styles['thing-box__icon']}>
              <CodeIcon />
            </span>
            <p className={styles['thing-box__title']}>
              Web App Development
            </p>
          </div>
          <p className={styles['thing-box__paragraph']}>
            I know both Front-end and Back-end but
            I’m more Front-end focused and I love ReactJS
          </p>
        </div>
        <div className={styles['thing-box']}>
          <div className={styles['thing-box__top']}>
            <span className={styles['thing-box__icon']}>
              <DesignIcon />
            </span>
            <p className={styles['thing-box__title']}>
              UI/UX Design
            </p>
          </div>
          <p className={styles['thing-box__paragraph']}>
            I’m kinda new to this but I love making really cool website designs that also has nice User Experience
          </p>
        </div>
        <div className={styles['thing-box']}>
          <div className={styles['thing-box__top']}>
            <span className={styles['thing-box__icon']}>
              <WebIcon />
            </span>
            <p className={styles['thing-box__title']}>
              Websites for startups
            </p>
          </div>
          <p className={styles['thing-box__paragraph']}>
            I make websites for new bussiness and startups as a freelancer
          </p>
        </div>
      </div>
    </section>
    <section className={styles.section} id="projects">
      <h2 className={styles.section__heading}>Apps I’ve made</h2>
      <div className={styles['flex-box']}>
        { projects.map(project => (
          <div className={styles.project} key={project.title}>
            <div className={styles['project__top']}>
              <h3 className={styles['project-title']}>
                { project.title }
              </h3>
              <p className={styles['project-description']}>
                { project.desc }
              </p>
            </div>
            <div className={styles['project__bottom']}>
              <a href={project.code} target="_blank" rel="noreferrer" className={styles['project-link']}>
                View Code <UpRightIcon />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className={styles['project-link']}>
                View Live <UpRightIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
   <section className={styles.section}>
      <h2 className={styles.section__heading}>Read My Articles</h2>
      <p className={styles.section__paragraph}>
        I write blogs about Web development, React, JavaScript and useful resources
      </p>
      <div className={styles['flex-box']} style={{alignItems: 'end'}}>
        { blogs.map(blog => (
          <div className={styles['blog']} key={blog.title}>
            <Image src={blog.cover} alt="cover-image" width="500" height="250" objectFit="cover"/>
            <p className={styles['blog-title']}>
              { blog.title }
            </p>
            <a href={blog.url} target="_blank" rel="noreferrer" className={styles['button']}>Read</a>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.section} id="pricing">
      <h2 className={styles.section__heading}>Websites for Startups</h2>
      <p className={styles.section__paragraph}>
        If you want to build a presence on the internet
        then having a website is must and I can create one for you
      </p>
      <div style={{alignItems: 'end', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <div className={styles['pricing']}>
          <div className={styles['pricing__inner']}>
            <h3 className={styles['pricing__level']}>Basic</h3>
            <p className={styles['pricing__desc']}> Essential Features </p>
            <span className={styles['pricing__price']}>
              $200
            </span>
            <ul className={styles['pricing__features']}>
              <li><span><TickIcon /></span> Responsive Design</li>
              <li><span><TickIcon /></span> 1 Page</li>
              <li><span><TickIcon /></span>$50 for each extra page</li>
            </ul>
            <a href="#contact" className={styles['pricing__button']} onClick={onChoosePlan}>
              Choose Basic
            </a>
          </div>
        </div>
        <div className={styles['pricing'] + ' ' + styles['pricing-rec']}>
          <p> RECOMMENDED </p>
          <div className={styles['pricing__inner']}>
            <h3 className={styles['pricing__level']}>Standard</h3>
            <p className={styles['pricing__desc']}> Essential Features </p>
            <span className={styles['pricing__price']}>
              $400
            </span>
            <ul className={styles['pricing__features']}>
              <li><span><TickIcon /></span> Responsive Desgin</li>
              <li><span><TickIcon /></span> Google Analytics Integration</li>
              <li><span><TickIcon /></span> CMS Integration</li>
              <li><span><TickIcon /></span> Upto 5 pages</li>
            </ul>
            <a href="#contact" className={styles['pricing__button']} onClick={onChoosePlan}>
              Choose Standard
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section} id="contact">
      <h2 className={styles.section__heading}>Connect with me</h2>
      <p className={styles.section__paragraph}>
        If you wanna get in touch, talk to me about a project collaboration
        or just say hi, fill up the awesome form below or send an email to
        <a href="mailto:siddharthroy36912@gmail.com"> siddharthroy36912@gmail.com </a>
        and ~let{"'"}s talk.
      </p>
      <form className={styles['contact-form']} data-netlify="true" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles['contact-form__top']}>
          <div className={styles['contact-form-input']} style={{marginRight: '10px'}}>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required/>
            { name.trim() === '' ? (
              <label htmlFor="name">Name</label>) : null }

          </div>
          <div className={styles['contact-form-input']} style={{marginLeft: '10px'}}>
            { email.trim() === '' ? (
              <label htmlFor="email">Email</label>) : null }
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
          </div>
        </div>
        <div className={styles['contact-form__bottom']} style={{marginTop: '20px'}}>
          <div className={styles['contact-form-input']}>
            { message.trim() === '' ? (
              <label htmlFor="message">Message</label>) : null }
            <textarea
              required
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={10}
            />
          </div>
        </div>
        <button
          type="submit"
          className={styles.button}
          style={{width: '100%', marginTop: '20px', fontSize: '1em'}}>
          Submit
        </button>
      </form>
    </section>
  </>);
}

export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./content/projects');

  const projects = filesInProjects.map(file => {
    return matter(fs.readFileSync(`./content/projects/${file}`, 'utf8')).data
  });

  const response = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.DEVTO_KEY
    }
  });

  let blogs = await response.json();

  blogs = blogs.slice(0, 4);
  let blogsMin = [];

  blogs.forEach(blog => {
    blogsMin.push({
      title: blog.title,
      url: blog.url,
      cover: blog.cover_image
    });
  });

  return {props: { projects, blogs: blogsMin }};
}
