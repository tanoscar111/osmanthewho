import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TextReveal({ children }) {
	const textRef = useRef(null)

	useEffect(() => {
		ScrollTrigger.create({
			trigger: textRef.current,
			//markers: true,
			start: "center 65%",
			end: "center 35%",
			scrub: 1,
			onEnter: () => {
				gsap.to(textRef.current, {
					y: -50,
					duration: 1,
					autoAlpha: 1
				})
			},
			onLeave: () => {
				gsap.to(textRef.current, {
					y: -100,
					duration: 1,
					autoAlpha: 0
				})
			},
			onEnterBack: () => {
				gsap.to(textRef.current, {
					y: 50,
					duration: 1,
					autoAlpha: 1
				})
			},
			onLeaveBack: () => {
				gsap.to(textRef.current, {
					y: 100,
					duration: 1,
					autoAlpha: 0
				})
			},
		})
	}, [])

	return <div style={{ opacity: "0" }} ref={textRef}>{children}</div>
}
