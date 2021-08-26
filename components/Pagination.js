import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@styles/Pagination.module.css'

export default function Pagination({ nextPage, prevPage, nextPages, prevPages, lastPage }) {
	const router = useRouter()
	const { page } = router.query

	return (
		<div className={`${styles.pagination}`}>
			<ul>
				{prevPage && <li>
					<Link href={`${Number(page)-1}`}><a>
						<GrFormPrevious />
					</a></Link>
				</li>}
				{prevPages.length !== 0 && prevPages[0] !== 1 && (<>
					<li>
						<Link href={`1`}>
							<a>1</a>
						</Link>
					</li>
					{prevPages[0] !== 2 && (
						<li>
							<span>...</span>
						</li>
					)}
				</>)}
				{prevPages.map(num => (<li key={num}>
					<Link href={`${num}`}>
						<a>{num}</a>
					</Link>
				</li>))}
				<li className={styles.active}>{page}</li>
				{nextPages.map(num => (<li key={num}>
					<Link href={`${num}`}>
						<a>{num}</a>
					</Link>
				</li>))}
				{nextPages.length !== 0 && nextPages[nextPages.length-1] !== lastPage && (<>
					{nextPages[nextPages.length-1] !== lastPage-1 && (
						<li>
							<span>...</span>
						</li>
					)}
					<li>
						<Link href={`${lastPage}`}>
							<a>{lastPage}</a>
						</Link>
					</li>
				</>)}
				{nextPage && <li>
					<Link href={`${Number(page)+1}`}><a>
						<GrFormNext />
					</a></Link>
				</li>}
			</ul>
		</div>
	)
}
