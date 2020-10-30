import Head from 'next/head'
import Navigation from '../components/navigation/Navigation'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Osman Işık | Film Creator</title>
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<Navigation />

			<div style={{ width: '90%', height: '200vh', margin: 'auto' }}>
				{ children }
			</div>
		</>
	)
}
