import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal({ children }) { // childreni parantezsiz dene
	const textRef = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: "center 70%",
				end: "center 30%",
				markers: true,
				scrub: 1,
			}
		})

		tl.from(textRef.current, {
			opacity: 0,
			y: 70,
		}).to(textRef.current, {
			y: -70,
			autoAlpha: 0,
		})
	}, [])

  return <div ref={textRef}>{children}</div>
}
