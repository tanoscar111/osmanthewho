import { useEffect, useRef } from "react"
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export function Swing({ children }) {

	// select wrapper of elements that will be animated
	const wrapperRef = useRef()

	// function to generate integers to use in the animations
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	useEffect(() => {
		const wrapper = wrapperRef.current

		// grab elements
		const elements = gsap.utils.toArray(wrapper.children)

		// 1) swing animation for each element
		elements.forEach(element => {
			const size = element.dataset.size
			const randSize = 100 - size
			gsap.to(element, {
				motionPath: {
					path: [
						{x: -randSize / 1.5, y: 0},
						{x: -randSize / 1.5, y: -randSize / 2},
						{x: 0, y: -randSize / 2},
						{x: 0, y: 0}
					],
					curviness: 1,
				},
				duration: getRandom(size / 3, size / 2),
				ease: 'none',
				repeat: -1,
				delay: getRandom(0, 4)
			})
		})

		/*
		// 2) mouse move parallax animation
		const onMouseMove = (event) => {
			const pageX = event.pageX - (wrapper.getBoundingClientRect().width * 0.5)
			const pageY = event.pageY - (wrapper.getBoundingClientRect().height * 0.5)

			elements.forEach(element => {

				// element.dataset.size is an int between 30 - 60
				const speedX = 100 - element.dataset.size
				const speedY = 100 - element.dataset.size

				gsap.to(element, {
					x: -((element.offsetLeft + pageX * speedX) * 0.005) / 2,
					y: -(element.offsetTop + pageY * speedY) * 0.005,
					ease: "Expo.easeOut",
					duration: 2
				})

			})
		}
		document.addEventListener("pointermove", onMouseMove)
		*/
	}, [])

	return <div ref={wrapperRef}>{children}</div>
}
