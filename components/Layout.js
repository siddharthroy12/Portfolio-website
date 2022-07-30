import { useRef, useEffect } from 'react';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      cursorInnerRef.current.style.left = (event.clientX - 3) + 'px';
      cursorInnerRef.current.style.top = (event.clientY - 3) + 'px';
      cursorRef.current.style.left = (event.clientX - 15) + 'px';
      cursorRef.current.style.top = (event.clientY - 15) + 'px';
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (<>
    <div className={styles.cursor} ref={cursorRef}>
      <div ref={cursorInnerRef}/>
    </div>
    <Navbar />
    <main className="container fade-in">
      { children }
    </main>
  </>);
}
