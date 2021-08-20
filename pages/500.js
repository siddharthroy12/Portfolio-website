import withFrontData from '@utils/withFrontData'

export default function ServerError() {
	return (
		<p className="danger">500 - Server Error</p>
	)
}

export async function getStaticProps() {
	return withFrontData()
}