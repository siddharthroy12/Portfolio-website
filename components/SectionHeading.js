import styles from '../styles/SectionHeading.module.css';

function convertToSlug(Text) {
  return Text.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
}

export default function SectionHeading({heading, subSection, first, last}) {
  return (
    <div className={styles.container + ' ' + (subSection ? styles.subSection : '')}>
      <div id={convertToSlug(heading)} className={styles.anchor}/>
      <div className={styles.circle}>
        <div/>
      </div>
      <div className={styles.line} style={{bottom : last ? '50%' : null, top: first ? '50%' : null}}/>
        {heading}
    </div>
  );
}
