import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'
import HeroCard from '../components/homePage/HeroCard'

export default function About() {

	const { scrollYProgress, scrollY } = useViewportScroll()
	const physics = { damping: 5, mass: 0.3, stiffness: 20 }

	const transformRight = useTransform(scrollY, [0, 800], [0, 200])
	const transformLeft = useTransform(scrollY, [0, 800], [0, -200])

	const transformRightFast = useTransform(scrollY, [0, 400], [0, 200])
	const transformLeftFast = useTransform(scrollY, [0, 400], [0, -200])

	const springRight = useSpring(transformRight, physics)
	const springLeft = useSpring(transformLeft, physics)

	const springRightFast = useSpring(transformRightFast, physics)
	const springLeftFast = useSpring(transformLeftFast, physics)

	return (
		<Layout>
			<SmoothScroll>
				<Head>
					<title>About Osman Işık</title>
				</Head>
				<section className='hero'>
					<motion.div style={{ x: springRight }}>FILMMAKER</motion.div>
					<motion.div style={{ x: springLeftFast }}>STORY</motion.div>
					<motion.div style={{ x: springRightFast }}>TELLER</motion.div>
					<motion.div style={{ x: springLeft }}>DIRECTOR</motion.div>
				</section>

				<section className='intro'>
					<div className='lan'>
						<HeroCard />
					</div>
					<div className='intro-text'>
						<p>
							I promote living the life to the fullest and
							seeing the world through an optimistic lens.
						</p>
						<p>
							I'm Osman Işık. I'm a filmmaker, photographer, designer and director living
							in Turkey. I produce creative content for brands and artists.
						</p>
						<p>
							You can take a look at and see what I'm doing on
							my <a href="https://www.instagram.com/osmanthewho" target="_blank">
							Instagram</a> account.
							I'm available for freelance work.
						</p>

					</div>
				</section>
			</SmoothScroll>
		</Layout>
	)
}
