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
      I`&apos;m a Front-end developer with some experience in back-end.
      I run a mini-blog on Instagram with over 20k Followers.
      And In my free time, I like to learn new languages and frameworks.
    </p>
    <SectionHeading heading="Projects" first/>
    {projects.map(project => (<div key={project.title}>
      <SectionHeading heading={project.title} subSection/>
      <Section>
        <p>{project.desc}</p>
        <a href={project.live} target="_blank" rel="noreferrer">Live</a>
        <a href={project.code} target="_blank" rel="noreferrer">Source Code</a>
      </Section>
    </div>))}
    <SectionHeading heading="Popular Posts"/>
    <SectionHeading heading="How to get good at LeetCode" subSection/>
    <Section>
      <InstagramEmbed url="https://www.instagram.com/p/Cf6rtHOrLyY/" width={328} />
    </Section>
    <SectionHeading heading="Intro to Functional Programming" subSection/>
    <Section>
      <InstagramEmbed url="https://www.instagram.com/p/CfocKnWpuTq/" width={328} />
    </Section>
    <SectionHeading heading="Intro to Functional Programming" subSection/>
    <Section>
      <InstagramEmbed url="https://www.instagram.com/p/CftBVLHp7sp/" width={328} />
    </Section>
    <SectionHeading heading="package-lock.json Explained" subSection last/>
    <Section last>
      <InstagramEmbed url="https://www.instagram.com/p/CchVk2fMppe/" width={328} />
    </Section>
   </div>);
}


export async function getServerSideProps() {
  const GET_TREE_LINK = 'https://api.github.com/repos/siddharthroy12/Portfolio-website/git/trees/main?recursive=1';
  const GET_RAW_LINK = 'https://raw.githubusercontent.com/siddharthroy12/Portfolio-website/main';

  let projects = []
  try {
    const tree = (await (await fetch(GET_TREE_LINK)).json()).tree;

    const projectFiles = tree.filter(obj => {
      return obj.path.startsWith('content/projects/');
    }).map(obj => {
      return obj.path;
    });

    for (let file of projectFiles) {
      projects.push(matter((await (await fetch(`${GET_RAW_LINK}/${file}`)).text())).data);
    }
  } catch {
  }

  return {props: { projects }};
}
