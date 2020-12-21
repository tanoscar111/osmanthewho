import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'

export default function Home() {
	const container = {
		width: '100%',
		height: '100vh',
		fontFamily: 'Akzidenz Grotesk Bold',
		fontSize: '2.5rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
  return (
		<Layout>
			<SmoothScroll>
				<div className='full-bleed' style={ container }>
					<h1>COOL SHIT</h1>
					<h1>COMING SOON</h1>
				</div>
			</SmoothScroll>
		</Layout>
  )
}
