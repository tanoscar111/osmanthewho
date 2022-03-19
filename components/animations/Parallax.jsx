import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Parallax animation
export function Parallax({ children }) {
	const el = useRef()

	useEffect(() => {
		const animations = []
		const elements = gsap.utils.toArray(el.current.children)
		elements.forEach(element => {
			const movement = -(element.offsetHeight * element.dataset.speed)
			const animation = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: "top bottom",
					end: "bottom top",
					scrub: 0.2
				}
			})
				.to(element, {y: movement, ease: "none"}, 0)

			animations.push(animation)
		})

		return () => {
			animations.forEach((animation) => animation.scrollTrigger.kill())
		}

	}, [])

	return <div ref={el}>{children}</div>
}

// Parallax Overflow animation
export function ParallaxOverflow({ children }) {
	const el = useRef()

	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: el.current,
				scrub: 0.2
			}
		})
			.from(el.current, {
				yPercent: -15,
				ease: "none"
			})
			.to(el.current, {
				yPercent: 15,
				ease: "none"
			});

	}, [])

	return <div ref={el}>{children}</div>
}
