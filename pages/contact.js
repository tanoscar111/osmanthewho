import ContactForm from "../components/contactForm/ContactForm"
import Layout from "../components/constants/Layout"
import SmoothScroll from "../components/constants/SmoothScroll"

export default function Contact() {
	const titleStyle = {
		fontFamily: "Monument Extended",
		paddingTop: "1rem",
		fontSize: "2rem",
		letterSpacing: "2px",
	}
	return (
		<Layout>
			<SmoothScroll>
				<h2 style={titleStyle}>GET IN TOUCH!</h2>
				<ContactForm />
			</SmoothScroll>
		</Layout>
	)
}
