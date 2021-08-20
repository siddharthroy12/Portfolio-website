import fs from 'fs'
import matter from 'gray-matter'

export default function withFrontData(data) {
	const { picture, headtitle, headdescription } = matter(fs.readFileSync('./content/_index.md', 'utf8')).data
	return {
		props: {
			...data?.props,
			frontData: { picture, headtitle, headdescription }
		}
	}
}