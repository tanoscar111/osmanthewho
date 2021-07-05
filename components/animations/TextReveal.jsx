import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TextReveal({ children }) {
	const textRef = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: "center center",
				end: "+=" + (window.innerHeight * 1.5),
				scrub: 1,
				pin: true,
			}
		})

		tl.from(textRef.current, {
			autoAlpha: 0,
			y: 50,
		}).to(textRef.current, {
			autoAlpha: 0,
			y: -50,
		})
	}, [])

	return <div ref={textRef}>{children}</div>
}
