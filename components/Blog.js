import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Blog.module.css';

export default function Blog({ blog }) {
  return (<Link href={'/blog/'+blog.slug}>
    <a className={styles['blog']} >
      <Image src={blog.cover} alt="cover-image" width="500" height="250" objectFit="cover"/>
        <p className={styles['blog-title']}>
          { blog.title }
        </p>
        <div className={styles['blog__tags']}>
          { blog.tags.map(tag => (<span key={tag}>#{ tag }</span>)) }
        </div>
    </a>
  </Link>);
}
