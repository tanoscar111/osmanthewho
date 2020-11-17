import Head from 'next/head'
import Navigation from '../navigation/Navigation'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Osman Işık | Film Creator</title>
        <link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			{ children }
		</>
	)
}
