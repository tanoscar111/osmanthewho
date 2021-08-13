import { useEffect, useRef } from "react"
import Layout from "../components/constants/Layout"
import VideoGallery from "../components/videoGallery/VideoGallery"
import gsap from 'gsap'

export default function Work() {
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
			<h1 ref={titleRef} className="works-title">
				<span>p</span>
				<span>r</span>
				<span>o</span>
				<span>j</span>
				<span>e</span>
				<span>c</span>
				<span>t</span>
				<span>s</span>
			</h1>
			<VideoGallery />
		</Layout>
	)
}
