import withFrontData from '@utils/withFrontData'

export default function ServerError() {
	return (
		<p className="danger">404 - Not Found</p>
	)
}

export async function getStaticProps() {
	return withFrontData()
}