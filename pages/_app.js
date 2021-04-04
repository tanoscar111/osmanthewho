import "../styles/globals/base.css"
import "../styles/globals/utils.css"
import "../styles/globals/fonts.css"
import "../styles/globals/variables.css"
import "../styles/globals/media-queries.css"

import "../styles/pages/Index.css"
import "../styles/pages/About.css"

import "../styles/components/constants/Layout.css"
//import "../styles/components/constants/SmoothScroll.css"

import "../styles/components/navigation/Menu.css"
import "../styles/components/navigation/MenuToggle.css"
import "../styles/components/footer/Footer.css"
import "../styles/components/videoGallery/VideoGallery.css"

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
