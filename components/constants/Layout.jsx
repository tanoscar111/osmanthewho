import Head from "next/head"
import Navigation from "../navigation/Navigation"
//import Footer from '../footer/Footer'

// !! ONLY CONSTANT ELEMENTS 'THAT DOESN'T NEED TO BE SMOOTH SCROLLED' GOES HERE !!
// css transform broke the position: fixed rule

export default function Layout({ children }) {
	return (
		<div className="layout-container">
			<Head>
				<title>Osman Işık | Film Creator</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			{children}
			{/*<Footer />*/}
		</div>
	)
}
