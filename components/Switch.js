import styles from '@styles/Switch.module.css';

export default function Switch() {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.switch} />
      <span className={styles.background} />
      <span className={styles.handle} />
    </div>
  );
}
