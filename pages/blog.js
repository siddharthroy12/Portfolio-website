import Layout from '@components/Layout'
import { getAuthorPic } from "utils"

export default function Blog({ authorPic }) {
	return (
		<Layout authorPic={authorPic}>
			<p className="alert alert-warning">Comming Soon</p>
		</Layout>	
	)
}

export async function getStaticProps() {
	return {
		props: {
			authorPic: getAuthorPic()
		}
	}
}
