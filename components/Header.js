import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import { RiGithubFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import { IoMenu } from 'react-icons/io5'

const navLinks = {
	Home: '/',
	Projects: '/works/1',
	Blogs: '/blogs/1',
	Contact: '/contact'
}

function pathCheck(path, pathToCheck) {
	if (path === '/' && pathToCheck === '/') {
		return true
	} else if (pathToCheck === '/') {
		return false
	}

	const pathToCheckWithoutFirstSlash = pathToCheck.slice(1)
	let indexOfSecondSlash = pathToCheckWithoutFirstSlash.indexOf('/') + 1

	if (indexOfSecondSlash === 0) {
		indexOfSecondSlash = pathToCheck.length
	}
	const pathToCheckWithoutSecondSlash = pathToCheck.slice(0, indexOfSecondSlash)

	const pathWithoutFirstSlash = path.slice(1)
	indexOfSecondSlash = pathWithoutFirstSlash.indexOf('/') + 1

	if (indexOfSecondSlash === 0) {
		indexOfSecondSlash = pathToCheck.length
	}

	const pathWithoutSecondSlash = path.slice(0, indexOfSecondSlash)

	return pathWithoutSecondSlash === pathToCheckWithoutSecondSlash ? true : false
}

export default function Header({ headData, title, subtitle, date }) {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false)
	const router = useRouter()
	return (<header className={styles['container']}>
		<div className={styles['header-top']}>
			<ul className={styles['social-link-list']}>
				<li><a hrefe="https://twitter.com/Siddharth_Roy12" target="_blank" rel="noopener noreferrer"><RiTwitterFill /></a></li>
				<li><a href="https://github.com/siddharthroy12" target="_blank" rel="noopener noreferrer"><RiGithubFill /></a></li>
				<li><a href="https://www.instagram.com/siddharthroy12/" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a></li>
			</ul>
			<nav>
				<ul>
					{Object.keys(navLinks).map(key => (
						<li
							className={
								pathCheck(router.pathname, navLinks[key]) ?
								styles['active-link'] : undefined
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
			<button className={styles['icon-btn']}><IoMenu /></button>
		</div>
		<div className={styles['header-bottom']}>
			<div className="container">
				{!title && (
					<div className={styles['header-bottom-left']}>
						<Image
							src={headData.picture}
							width="200"
							height="200"
							layout="fixed"
							alt="Author's Picture"
						/>
					</div>
				)}
				{!title ? (
					<div className={styles['header-bottom-right']}>
						<p className={styles['greeting']}>Hi, my name is</p>
						<p className={styles['name']}>{headData.name}</p>
						<p className={styles['small-bio']}>{headData.smallbio}</p>
						<a className="btn btn-outline btn-special">Contact</a>
					</div>
				) : (
					<div className={styles['header-bottom-right']}>
						<p className={styles['name']}>{title}</p>
						<p className={styles['small-bio']}>{subtitle}</p>
						{date && (
							<p className={styles['date']}>{date}</p>
						)}
					</div>
				)}

			</div>
		</div>
	</header>)
}
