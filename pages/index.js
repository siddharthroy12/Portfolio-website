import GithubIcon from '@components/icons/Github';
import InstagramIcon from '@components/icons/Instagram';
import TwitterIcon from '@components/icons/Twitter';
import CodeIcon from '@components/icons/Code';
import WebIcon from '@components/icons/Web';
import DesignIcon from '@components/icons/Design';
import UpRightIcon from '@components/icons/UpRight';
import Game from '@components/Game';
import styles from '@styles/Home.module.css';

export default function Home() {
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
    <section className={styles.section}>
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
            I know both Front-end and Back-end but I’m more Front-end focused and I love ReactJS
          </p>
        </div>
        <div className={styles['thing-box']}>
          <div className={styles['thing-box__top']}>
            <span className={styles['thing-box__icon']}>
              <DesignIcon />
            </span>
            <p className={styles['thing-box__title']}>
              Web App Development
            </p>
          </div>
          <p className={styles['thing-box__paragraph']}>
            I know both Front-end and Back-end but I’m more Front-end focused and I love ReactJS
          </p>
        </div>
        <div className={styles['thing-box']}>
          <div className={styles['thing-box__top']}>
            <span className={styles['thing-box__icon']}>
              <WebIcon />
            </span>
            <p className={styles['thing-box__title']}>
              Web App Development
            </p>
          </div>
          <p className={styles['thing-box__paragraph']}>
            I know both Front-end and Back-end but I’m more Front-end focused and I love ReactJS
          </p>
        </div>
      </div>
    </section>
    <section className={styles.section}>
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
  </>);
}

export async function getStaticProps() {
  return {props: {}};
}
