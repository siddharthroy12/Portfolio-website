import fs from 'fs'
import matter from 'gray-matter'

export default function withHeadData(data) {
	const { headtitle, headdescription } = matter(fs.readFileSync('./content/_index.md', 'utf8')).data
	return {
		props: {
			...data?.props,
			headData: { headtitle, headdescription }
		}
	}
}