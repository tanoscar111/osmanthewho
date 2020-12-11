import { useEffect } from 'react'
import kwesforms from 'kwesforms';

export default function ContactForm() {
	useEffect(() => {
		kwesforms.init();
	}, [])

	return (
		<div className='form-container'>
			<form className="kwes-form" action="https://kwes.io/api/foreign/forms/JHCSMM3SCuGJdAXe5w09">
				<label>Your name<input name="name" type="text" placeholder="Fenasi Kerim" /></label>
				<label>Your email<input name="email" type="email" required placeholder="Ar$1zBe!A@hotmail.com" /></label>
				<label>Your message<textarea name="message" rows="5" placeholder="guzel site is yapar👌" /></label>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	)
}

