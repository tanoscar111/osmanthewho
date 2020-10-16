import Head from 'next/head'
import styles from '../styles/pages/About.module.css'
import Layout from '../components/Layout'

export default function About() {
	return (
		<Layout>
			<div>
				<Head>
					<title>About | Osman Işık</title>
				</Head>
				<main>
					<br />
					<div>FILMMAKER</div>
					<div>VIDEOGRAPHER</div>
					<div>DESIGNER</div>
					<div>DIRECTOR</div>
				</main>
			</div>
		</Layout>
	)
}
