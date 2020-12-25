import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'
import HeroCard from '../components/homePage/HeroCard'

export default function Home() {
  return (
		<Layout>
			<SmoothScroll>
				<div className='landing'>
					<HeroCard />
				</div>
			</SmoothScroll>
		</Layout>
  )
}
