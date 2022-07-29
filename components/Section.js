import styles from '../styles/Section.module.css';

export default function Section({children, last}) {
  return (
  <div className={styles.container}>
    {!last ?
        (<div className={styles.line}/>) : null }
    {children}
  </div>);
}
