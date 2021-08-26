export default function ServerError() {
	return (<></>)
}

export async function getStaticProps() {
	return {
		props: {
			title: '404 - Not found',
			subtitle: 'Looks like you are lost (o_O) !'
		}
	}
}