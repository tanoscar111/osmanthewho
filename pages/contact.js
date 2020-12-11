import ContactForm from '../components/contactForm/ContactForm'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'

export default function Contact() {
	return (
		<Layout>
			<SmoothScroll>
				<h2 style={{ fontFamily: 'Akzidenz-Grotesk', paddingTop: '1rem', fontSize: '2rem' }}>GET IN TOUCH!</h2>
				<ContactForm />
			</SmoothScroll>
		</Layout>
	)
}
