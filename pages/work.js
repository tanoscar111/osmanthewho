import { useEffect, useRef } from "react"
import Layout from "../components/constants/Layout"
import VideoGallery from "../components/videoGallery/VideoGallery"
import gsap from 'gsap'

export default function Work() {
	const titleStyle = {
		padding: "10rem 0 5rem",
		textAlign: "center",
		whiteSpace: "nowrap",
	}

	const spanStyle = {
		display: "inline-block",
	}

	const titleRef = useRef()

	useEffect(() => {
		gsap.timeline({
			delay: 0.5,
			duration: 1,
			ease: "power1",
		})
			.from(titleRef.current.children, {
				y: 70,
				opacity: 0,
				stagger: 0.04,
			})
	}, [])

	return (
		<Layout>
			<h1 ref={titleRef} style={titleStyle}>
				<span style={spanStyle}>p</span>
				<span style={spanStyle}>r</span>
				<span style={spanStyle}>o</span>
				<span style={spanStyle}>j</span>
				<span style={spanStyle}>e</span>
				<span style={spanStyle}>c</span>
				<span style={spanStyle}>t</span>
				<span style={spanStyle}>s</span>
			</h1>
			<VideoGallery />
		</Layout>
	)
}
