export default function ServerError() {
	return (<></>)
}

export async function getStaticProps() {
	return {
		props: {
			title: '500 - Server Error',
			subtitle: 'Looks like I messed up ＼(º □ º l|l)/'
		}
	}
}