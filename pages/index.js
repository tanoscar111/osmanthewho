import { useEffect, useRef } from "react"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default function Home() {

	const plus =  useRef()
	const overlay =  useRef()
	useEffect(() => {
		gsap.to(plus.current, {
			  scale: 100,
			scrollTrigger: {
				trigger: overlay.current,
				markers: true,
				start: "top top",
				end: "bottom top",
	  		scrub: true,
				pin: true,
			}
		})
	}, [])

	return (
		<>
			<section className="space"></section>

			<section className="featured-productions full-bleed">
				<div className="overlay" ref={overlay}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 4519 3213"
						preserveAspectRatio="xMidYMid slice"
						className="plus"
						ref={plus}
					>
						<path fill="black"
							d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
							fillRule="evenodd"></path>
					</svg>
				</div>
			</section>
			<section className="space"></section>
		</>
	)
}
