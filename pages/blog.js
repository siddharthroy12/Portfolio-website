import Layout from '@components/Layout'
import getFrontData from 'utils/getFrontData'

export default function Blog({ frontData }) {
	return (
		<Layout frontData={frontData}>
			<p className="alert alert-warning">Comming Soon</p>
		</Layout>	
	)
}

export async function getStaticProps() {
	return {
		props: {
			frontData: getFrontData()
		}
	}
}
