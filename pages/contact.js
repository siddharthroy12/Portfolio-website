import { IoPersonCircle } from 'react-icons/io5'
import { MdEmail, MdMessage } from 'react-icons/md'

import styles from '@styles/Contact.module.css'

export default function Contact() {
	return (
		<div className={`${styles['wrapper']} mt`}>
			<form name="contact" data-netlify="true" method="POST" action="/formsuccess">
				<input type="hidden" name="form-name" value="contact" />
				<label htmlFor="name">Name</label>
				<div>
					<IoPersonCircle />
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Name"
						required
					/>
				</div>
				<label htmlFor="email">Email</label>
				<div>
					<MdEmail />
					<input
						type="text"
						name="email"
						id="email" 
						placeholder="Email"
						required
					/>
				</div>
				<label htmlFor="message">Message</label>
				<div>
					<MdMessage />
					<textarea
            id="message"
            name="message"
						placeholder="Message"
						required
						spellCheck
						rows={6}
					/>
				</div>
				<button className="btn">Submit</button>
			</form>
		</div>
	)
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Contact Me',
			subtitle: 'I\'m currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my project.'
		}
	}
}
