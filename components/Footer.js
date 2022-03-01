import GithubIcon from '@components/icons/Github';
import InstagramIcon from '@components/icons/Instagram';
import TwitterIcon from '@components/icons/Twitter';
import NextIcon from '@components/icons/Nextjs';
import NetlifyIcon from '@components/icons/Netlify';
import styles from '@styles/Footer.module.css';

export default function Footer() {
  return (
  <footer className={styles.container}>
    <p>Like this Page? Clone it on <a href="https://github.com/siddharthroy12/Portfolio-website" target="_blank" rel="noreferrer">Github</a></p>
    <hr />
    <p>Copyright © { new Date().getFullYear() } Siddharth Roy</p>
    <p>Created using <NextIcon /> and <NetlifyIcon /> </p>
    <hr />
    <div className={styles.socials}>
      <a href="https://github.com/siddharthroy12" target="_blank" rel="noreferrer"><GithubIcon /></a>
      <a href="https://www.instagram.com/reactoverflow/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
      <a href="https://twitter.com/reactoverflow" target="_blank" rel="noreferrer"><TwitterIcon /></a>
    </div>
  </footer>
  );
}
