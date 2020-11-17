import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'

export default function About() {

	const { scrollYProgress, scrollY } = useViewportScroll()
	const physics = { damping: 5, mass: 0.3, stiffness: 20 }

	const transformRight = useTransform(scrollY, [0, 600], [0, 150])
	const transformLeft = useTransform(scrollY, [0, 600], [0, -150])

	const springRight = useSpring(transformRight, physics)
	const springLeft = useSpring(transformLeft, physics)

	return (
		<Layout>
			<SmoothScroll>
				<Head>
					<title>About Osman Işık</title>
				</Head>

				<section className='hero'>
					<motion.div style={{ x: springRight }}>FILMMAKER</motion.div>
					<motion.div style={{ x: springLeft }}>STORY ―</motion.div>
					<motion.div style={{ x: springRight }}>― TELLER</motion.div>
					<motion.div style={{ x: springLeft }}>DIRECTOR</motion.div>
				</section>

				<section className='intro'>
					<div className='intro-image'>
						<img src="../images/osman/osman.png" alt="Osman Işık" />
						<img src="../images/osman/gh5.png" alt="Panasonic Lumix GH5" />
					</div>
					<div className='intro-text'>
						<p>I promote living the life to the fullest and seeing the world through an optimistic lens.</p>
						<p>I'm Osman. I'm a filmmaker, videographer and designer in Turkey. I produce creative content for brands and artists.</p>
						<p>You know what, I make good shit. I mean <a href="https://www.instagram.com/osmanthewho" target="_blank">really good shit. →</a></p>
					</div>
				</section>
			</SmoothScroll>
		</Layout>
	)
}
