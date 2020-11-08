import Head from 'next/head'
import Layout from '../constants/Layout'
import SmoothScroll from '../constants/SmoothScroll'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'

export default function About() {

const { scrollYProgress, scrollY } = useViewportScroll()
const physics = { damping: 5, mass: 0.3, stiffness: 20 }

const transformRight = useTransform(scrollY, [0, 600], [0, 200])
const transformLeft = useTransform(scrollY, [0, 600], [0, -200])

const springRight = useSpring(transformRight, physics)
const springLeft = useSpring(transformLeft, physics)


	return (
		<Layout>
			<SmoothScroll>
				<Head>
					<title>About Osman Işık</title>
				</Head>

				<div className='hero'>
					<motion.div style={{ x: springRight }}>FILMMAKER</motion.div>
					<motion.div style={{ x: springLeft }}>VIDEO ―</motion.div>
					<motion.div style={{ x: springRight }}>― GRAPHER</motion.div>
					<motion.div style={{ x: springLeft }}>DESIGNER</motion.div>
				</div>

				<div className='introduce-description'>
					<p>
						I promote living your life to the fullest and seeing the world through an optimistic lens.
						I'm Osman. I'm a filmmaker, videographer and designer in Turkey.
						I produce original content for brands and artists.
						Hit me up if you wanna collabrate. You can look my projects for more.
					</p>
				</div>

			</SmoothScroll>
		</Layout>
	)
}
