import SunIcon from '@components/icons/Sun';
import MoonIcon from '@components/icons/Moon';
import styles from '@styles/Switch.module.css';

export default function Switch({ on, onChange }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.switch} checked={on} onChange={onChange}/>
      { on ? <MoonIcon /> : <SunIcon /> }
    </div>
  );
}
