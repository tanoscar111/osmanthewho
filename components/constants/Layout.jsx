import Head from "next/head"
import Navigation from "../header/navigation/Navigation"
import Logo from "../header/logo/Logo"
import Footer from "../footer/Footer"
import Fullscreen from "../fullscreen/Fullscreen"
import ContactModal from "../modal/ContactModal"

// css transform breaks the 'position: fixed' rule

export default function Layout({ children }) {
	return (
			<div className="layout-container">
				<Head>
					<title>Osman Işık | Film Creator</title>
					<link rel="icon" href="/images/favicon.ico" />
				</Head>
				<Logo />
				<Navigation />
				{children}
				<Footer />
				<Fullscreen />
				<ContactModal />
			</div>
	)
}
