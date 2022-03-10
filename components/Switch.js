import SunIcon from '@components/icons/Sun';
import MoonIcon from '@components/icons/Moon';
import styles from '@styles/Switch.module.css';

export default function Switch({ on, onChange }) {
  return (
    <div className={styles.container}>
      <label htmlFor="theme-switch">Theme Switcher</label>
      <input type="checkbox" className={styles.switch} checked={on} onChange={onChange} name="theme-switch" id="theme-switch" />
      { on ? <MoonIcon /> : <SunIcon /> }
    </div>
  );
}
