import Head from "next/head"
import Navigation from "../navigation/Navigation"
import Footer from "../footer/Footer"

// css transform breaks the 'position: fixed' rule

export default function Layout({ children }) {
	return (
		<div className="layout-container">
			<Head>
				<title>Osman Işık | Film Creator</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			{children}
			<Footer />
		</div>
	)
}
