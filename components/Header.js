import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import { RiGithubFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'

const navLinks = {
	About: '/',
	Projects: '/projects',
	Blogs: '/blogs/1',
	Contact: '/contact'
}

function pathCheck(path, pathToCheck) {
	if (path === '/' && pathToCheck === '/') {
		return true
	}

	const pathToCheckWithoutFirstSlash = pathToCheck.slice(1)
	let indexOfSecondSlash = pathToCheckWithoutFirstSlash.indexOf('/') + 1

	if (indexOfSecondSlash === 0) {
		indexOfSecondSlash = pathToCheck.length
	}
	const pathToCheckWithoutSecondSlash = pathToCheck.slice(0, indexOfSecondSlash)

	const pathWithoutFirstSlash = path.slice(1)
	indexOfSecondSlash = pathWithoutFirstSlash.indexOf('/') + 1

	const pathWithoutSecondSlash = path.slice(0, indexOfSecondSlash)

	return pathWithoutSecondSlash === pathToCheckWithoutSecondSlash ? true : false
}

export default function Header({ headData }) {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false)
	const router = useRouter()
	return (<header className={styles['container']}>
		<div className={styles['header-top']}>
			<ul className={styles['social-link-list']}>
				<li><span><RiTwitterFill /></span></li>
				<li><span><RiGithubFill /></span></li>
				<li><span><RiInstagramFill /></span></li>
			</ul>
			<nav>
				<ul>
					{Object.keys(navLinks).map(key => (
						<li
							className={
								pathCheck(router.pathname, navLinks[key]) &&
								styles['active-link']
							}
							key={key}
						>
							<Link href={navLinks[key]}>
								<a>{key}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
		<div className={styles['header-bottom']}>
			<div className="container">
				<div className={styles['header-bottom-left']}>
					<Image
						src={headData.picture}
						width="200"
						height="200"
						layout="fixed"
					/>
				</div>
				<div className={styles['header-bottom-right']}>
					<p className={styles['greeting']}>Hi, my name is</p>
					<p className={styles['name']}>{headData.name}</p>
					<p className={styles['small-bio']}>{headData.smallbio}</p>
				</div>
			</div>
		</div>
	</header>)
}
