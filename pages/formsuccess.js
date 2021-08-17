import Layout from '@components/Layout'
import getFrontData from 'utils/getFrontData'

export default function Formsuccess({ frontData }) {
	return (
		<Layout frontData={frontData}>
			<p className="alert">Form submitted successfully</p>
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
