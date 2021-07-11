import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MenuToggle({ isMenuOpen, setIsMenuOpen }) {
	const upperRef = useRef(null)
	const middleRef = useRef(null)
	const lowerRef = useRef(null)
	const tl = useRef(gsap.timeline({paused: true, reversed: true}))
	useEffect(() => {
		tl.current
			.to(upperRef.current, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:"Power2.easeInOut"}, 'start')
			.to(middleRef.current, 0.5, {autoAlpha: 0}, 'start')
			.to(lowerRef.current, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:"Power2.easeInOut"}, 'start')
	}, [])

	const handleClick = () => {
		isMenuOpen ? tl.current.reverse(): tl.current.play()
		setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
	}

	return (
		<div
			onClick={() => handleClick()}
			className="menu-toggle"
		>
			<span className="menu-toggle-text">menu</span>
			<svg
				className="menu-toggle-svg"
				viewBox="0 0 12 10"
				height="30px"
				width="30px"
			>
				<path d="M10,2 L2,2" ref={upperRef} style={{ fill: "none", stroke: "white", strokeLinecap: "square" }}/>
				<path d="M2,5 L30,5" ref={middleRef} style={{ fill: "none", stroke: "white", strokeLinecap: "square" }}/>
				<path d="M10,8 L2,8" ref={lowerRef} style={{ fill: "none", stroke: "white", strokeLinecap: "square" }}/>
			</svg>
		</div>
	)
}
