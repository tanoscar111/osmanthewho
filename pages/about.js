import Head from 'next/head'
import styles from '../styles/pages/About.module.css'
import Layout from '../components/Layout'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function About() {
	const { scrollXProgress } = useViewportScroll()
	const xPosAnim = useTransform(scrollXProgress, [0, 0.5, 1], [0, 100, 200])

	return (
		<Layout>
				<Head>
					<title>About Osman Işık</title>
				</Head>

			<motion.div>
					<div>FILMMAKER</div>
					<div>VIDEOGRAPHER</div>
					<div>DESIGNER</div>
					<div>DIRECTOR</div>
				</motion.div>
		</Layout>
	)
}
