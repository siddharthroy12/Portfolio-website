import Blog from '@components/Blog.js';
import Head from 'next/head';
import styles from '@styles/Blogs.module.css';

export default function Blogs({ blogs }) {
  return (<>
    <Head>
      <title>Read my latest blogs</title>
      <meta name="description" content="Web Development, JavaScript, React and much more" />
    </Head>
    <div className={styles.top}>
      <h1>Read my latest blogs</h1>
      <p>Web Development, JavaScript, React and much more</p>
    </div>
    <div className={styles.blogs}>
      { blogs.map(blog => <Blog blog={blog} key={blog.slug}/>) }
    </div>
  </>);
}

export async function getServerSideProps() {
  const response = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.DEVTO_KEY
    }
  });

  let blogs = await response.json();

  blogs = blogs.map(blog => ({
    title: blog.title,
    slug: blog.slug,
    cover: blog.cover_image,
    tags: blog.tag_list
  }));

  return {
    props: { blogs }
  }
}
