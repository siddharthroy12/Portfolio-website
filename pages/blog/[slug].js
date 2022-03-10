import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DevtoIcon from '@components/icons/Devto';
import styles from '@styles/Blog.module.css';

export default function Blog({ title, date, cover, markdown, description }) {
  const router = useRouter();
  const { slug } = router.query;
  return (<>
    <Head>
      <title>{ title }</title>
      <meta name="description" content={description} />
      <meta name="og:image" content={cover} />
    </Head>
    <div className={styles.top}>
      <Image src={cover} height="320" width="800" alt="cover image" />
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
    <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: markdown }} />
    <div className={styles.bottom}>
      <p>React, comment and follow on</p>
      <a href={`https://dev.to/siddharthroy/${slug}`}>
        <DevtoIcon />
      </a>
    </div>
  </>);
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const API_LINK = 'https://dev.to/api/articles/siddharthroy/';

export async function getServerSideProps(context) {
  const response = await (await fetch(API_LINK+context.params.slug)).json();

  const date = new Date(response.created_at);

  return {
    props:  {
      title: response.title,
      date: `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`,
      cover: response.cover_image,
      description: response.description,
      markdown: response.body_html
    }
  }
}
