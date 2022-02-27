import { useState } from 'react';
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

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
          <a href="#contact" className={styles['social-button']}>
            <GithubIcon />
          </a>
          <a href="#contact" className={styles['social-button']}>
            <InstagramIcon />
          </a>
          <a href="#contact" className={styles['social-button']}>
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
        <div className={styles.project}>
          <div className={styles['project__top']}>
            <h3 className={styles['project-title']}>
              Reddit MVP Clone
            </h3>
            <p className={styles['project-description']}>
              Reddit MVP Clone App made using MERN stack
            </p>
          </div>
          <div className={styles['project__bottom']}>
            <a href="#" className={styles['project-link']}>
              View Code <UpRightIcon />
            </a>
            <a href="#" className={styles['project-link']}>
              View Live <UpRightIcon />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles['project__top']}>
            <h3 className={styles['project-title']}>
              Reddit MVP Clone
            </h3>
            <p className={styles['project-description']}>
              Reddit MVP Clone App made using MERN stack
            </p>
          </div>
          <div className={styles['project__bottom']}>
            <a href="#" className={styles['project-link']}>
              View Code <UpRightIcon />
            </a>
            <a href="#" className={styles['project-link']}>
              View Live <UpRightIcon />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles['project__top']}>
            <h3 className={styles['project-title']}>
              Reddit MVP Clone
            </h3>
            <p className={styles['project-description']}>
              Reddit MVP Clone App made using MERN stack
            </p>
          </div>
          <div className={styles['project__bottom']}>
            <a href="#" className={styles['project-link']}>
              View Code <UpRightIcon />
            </a>
            <a href="#" className={styles['project-link']}>
              View Live <UpRightIcon />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles['project__top']}>
            <h3 className={styles['project-title']}>
              Reddit MVP Clone
            </h3>
            <p className={styles['project-description']}>
              Reddit MVP Clone App made using MERN stack
            </p>
          </div>
          <div className={styles['project__bottom']}>
            <a href="#" className={styles['project-link']}>
              View Code <UpRightIcon />
            </a>
            <a href="#" className={styles['project-link']}>
              View Live <UpRightIcon />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles['project__top']}>
            <h3 className={styles['project-title']}>
              Reddit MVP Clone
            </h3>
            <p className={styles['project-description']}>
              Reddit MVP Clone App made using MERN stack
            </p>
          </div>
          <div className={styles['project__bottom']}>
            <a href="#" className={styles['project-link']}>
              View Code <UpRightIcon />
            </a>
            <a href="#" className={styles['project-link']}>
              View Live <UpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.section__heading}>Websites for Startups</h2>
      <p className={styles.section__paragraph}>
        If you want to build a presence on the internet
        then having a website is must and I can create one for you
      </p>
      <div className={styles['flex-box']} style={{alignItems: 'end'}}>
        <div className={styles['pricing']}>
          <div className={styles['pricing__inner']}>
            <h3 className={styles['pricing__level']}>Basic</h3>
            <p className={styles['pricing__desc']}> Essential Features </p>
            <span className={styles['pricing__price']}>
              $200
            </span>
            <ul className={styles['pricing__features']}>
              <li><TickIcon /> Responsive Design</li>
              <li><TickIcon /> 1 Page</li>
              <li><TickIcon /> $100 for each extra page</li>
            </ul>
            <a href="#" className={styles['pricing__button']}>
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
              <li><TickIcon /> Responsive Desgin</li>
              <li><TickIcon /> Google Analytics Integration</li>
              <li><TickIcon /> CMS Integration</li>
              <li><TickIcon /> Upto 5 pages</li>
            </ul>
            <a href="#" className={styles['pricing__button']}>
              Choose Standard
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.section__heading}>Read My Articles</h2>
      <p className={styles.section__paragraph}>
        I write blogs about Web development, React, JavaScript and useful resources
      </p>
      <div className={styles['flex-box']} style={{alignItems: 'end'}}>
        <div className={styles['blog']}>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--f-YQQc2B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tyck62e0zc5u244tptyu.png" />
          <p className={styles['blog-title']}>
            How to build blog  with Next.js and Netlify CMS
          </p>
          <a href="#" className={styles['button']}>Read</a>
        </div>
        <div className={styles['blog']}>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--f-YQQc2B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tyck62e0zc5u244tptyu.png" />
          <p className={styles['blog-title']}>
            How to build blog  with Next.js and Netlify CMS
          </p>
          <a href="#" className={styles['button']}>Read</a>
        </div>
        <div className={styles['blog']}>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--f-YQQc2B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tyck62e0zc5u244tptyu.png" />
          <p className={styles['blog-title']}>
            How to build blog  with Next.js and Netlify CMS
          </p>
          <a href="#" className={styles['button']}>Read</a>
        </div>
        <div className={styles['blog']}>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--f-YQQc2B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tyck62e0zc5u244tptyu.png" />
          <p className={styles['blog-title']}>
            How to build blog  with Next.js and Netlify CMS
          </p>
          <a href="#" className={styles['button']}>Read</a>
        </div>
      </div>
    </section>
    <section className={styles.section} id="contact">
      <h2 className={styles.section__heading}>Connect with me</h2>
      <p className={styles.section__paragraph}>
        If you wanna get in touch, talk to me about a project collaboration
        or just say hi, fill up the awesome form below or send an email to
        <a href="mailto:siddharthroy36912@gmail.com"> siddharthroy36912@gmail.com </a>
        and ~let's talk.
      </p>
      <form class={styles['contact-form']}>
        <div class={styles['contact-form__top']}>
          <div class={styles['contact-form-input']} style={{marginRight: '10px'}}>
            { name.trim() === '' ? (
              <label for="name">Name</label>) : null }
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div class={styles['contact-form-input']} style={{marginLeft: '10px'}}>
            { email.trim() === '' ? (
              <label for="email">Email</label>) : null }
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
        </div>
        <div class={styles['contact-form__bottom']} style={{marginTop: '20px'}}>
          <div className={styles['contact-form-input']}>
            { message.trim() === '' ? (
              <label for="message">Message</label>) : null }
            <textarea
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
  return {props: {}};
}
