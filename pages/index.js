import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'

export default function Home() {
  return (
		<Layout>
			<SmoothScroll>
				<div className='landing'>
					<h1>cool shit coming soon.</h1>
				</div>
			</SmoothScroll>
		</Layout>
  )
}
