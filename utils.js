import fs from 'fs'
import matter from 'gray-matter'

export function getAuthorPic() {
	return matter(fs.readFileSync('./content/_index.md', 'utf8')).data.picture
}