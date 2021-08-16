import Layout from '@components/Layout'
import { getAuthorPic } from "utils"

export default function Formsuccess({ authorPic }) {
	return (
		<Layout authorPic={authorPic}>
			<p className="alert">Form submitted successfully</p>
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
