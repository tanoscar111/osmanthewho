import {
	motion,
	useSpring,
	useTransform,
	useViewportScroll,
} from "framer-motion"

export default function SlideOnScroll() {
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
		<section className="slide-text-container center-content">
			<motion.div style={{ x: springRight }}>FILMMAKER</motion.div>
			<motion.div style={{ x: springLeftFast }}>STORY</motion.div>
			<motion.div style={{ x: springRightFast }}>TELLER</motion.div>
			<motion.div style={{ x: springLeft }}>DIRECTOR</motion.div>
		</section>
	)
}
