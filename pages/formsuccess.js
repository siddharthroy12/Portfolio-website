import withFrontData from '@utils/withFrontData'

export default function Formsuccess() {
	return (
		<p className="alert">Form submitted successfully</p>
	)
}

export async function getStaticProps() {
	return withFrontData()
}