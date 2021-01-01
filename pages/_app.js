import "../styles/globals.css"

import "../styles/pages/Index.css"
import "../styles/pages/About.css"

import "../styles/components/constants/Layout.css"
import "../styles/components/constants/SmoothScroll.css"

import "../styles/components/navigation/Menu.css"
import "../styles/components/navigation/MenuToggle.css"
import "../styles/components/footer/Footer.css"
import "../styles/components/contactForm/ContactForm.css"
import "../styles/components/videoGallery/VideoGallery.css"
import "../styles/components/tiltCard/TiltCard.css"

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
