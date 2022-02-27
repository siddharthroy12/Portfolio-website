import { useEffect, useRef } from 'react';
import styles from '@styles/Game.module.css';

function game(ctx) {

}

export default function Game() {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');
  }, []);

  return (<>
    <div className={styles.container}>
      <div className={styles['top-bar']}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      <canvas ref={canvasEl} height="300" width="500"/>
    </div>
  </>);
}
