import Head from 'next/head'
import Layout from '../constants/Layout'
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function About() {

const { scrollYProgress } = useViewportScroll()
const animRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
const animLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);

	return (
		<Layout>
				<Head>
					<title>About Osman Işık</title>
				</Head>

			  <div className='hero'>
					<motion.div style={{ x: animRight }}>FILMMAKER</motion.div>
					<motion.div style={{ x: animLeft }}>VIDEO⸺</motion.div>
					<motion.div style={{ x: animRight }}>⸺GRAPHER</motion.div>
					<motion.div style={{ x: animLeft }}>DESIGNER</motion.div>
				</div>
		</Layout>
	)
}
