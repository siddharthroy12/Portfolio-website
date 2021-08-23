import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import { RiTwitterLine } from 'react-icons/ri'
import { FiGithub, FiInstagram } from 'react-icons/fi'

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

export default function Header(pageHeader) {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false)
	const router = useRouter()
	console.log(router.pathname)
	return (<header className={styles['container']}>
		<div className={styles['header-top']}>
			<ul className={styles['social-link-list']}>
				<li><RiTwitterLine /></li>
				<li><FiGithub /></li>
				<li><FiInstagram /></li>
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
	</header>)
}
