import styles from '@styles/Switch.module.css';

export default function Switch({ on, onChange }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.switch} checked={on} onChange={onChange}/>
      <span className={styles.background} />
      <span className={styles.handle} />
    </div>
  );
}
