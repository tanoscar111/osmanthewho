import Head from 'next/head'
import Layout from '../constants/Layout'
import SmoothScroll from '../constants/SmoothScroll'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'

export default function About() {

const { scrollYProgress } = useViewportScroll()
	const physics = { damping: 5, mass: 0.3, stiffness: 20 }

const transformRight = useTransform(scrollYProgress, [0, 1], [0, 400])
const transformLeft = useTransform(scrollYProgress, [0, 1], [0, -400])

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

					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.
					Ipsum nulla sequi perferendis iste alias? Quasi fuga doloremque fuga rerum tempora Rerum nesciunt explicabo ut minima mollitia error qui Dolor placeat aperiam aliquid ex ullam nemo adipisci. Harum eaque.

			</SmoothScroll>
		</Layout>
	)
}
