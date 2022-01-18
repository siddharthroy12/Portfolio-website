import styles from '@styles/404.module.css'

export default function ServerError() {
	return (<div className={styles.container}>
		<h1> Looks like I did an oopsi</h1>
		<img src="/500.svg" />
		</div>)
}
