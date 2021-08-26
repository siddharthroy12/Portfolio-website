export default function Formsuccess() {
	return (<></>)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Message sent successfully',
			subtitle: 'Thank you for contacting.'
		}
	}
}