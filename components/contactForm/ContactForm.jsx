export default function ContactForm() {
	return (
		<div className='form-container'>
			<form action="mailto:ynsmrsk13@gmail.com" method="post">
				<label>Your name<input name="name" type="text" /></label>
				<label>Your email<input name="email" type="email" required /></label>
				<label>Your message<textarea name="message" rows="5" /></label>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	)
}

