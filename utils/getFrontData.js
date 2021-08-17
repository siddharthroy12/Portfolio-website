import fs from 'fs'
import matter from 'gray-matter'

export default function getFrontData() {
	const { picture, headtitle, headdescription } = matter(fs.readFileSync('./content/_index.md', 'utf8')).data
	return {
		picture, headtitle, headdescription
	}
}