import { useEffect, useRef } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
import { TextRevealAnimation } from '../components/animations/TextRevealAnimation'
import gsap from 'gsap'

export default function Home() {
	const heading1 = useRef(null)
	const heading2 = useRef(null)

	useEffect(() => {
		gsap.timeline()
			.fromTo(heading1.current, {
				y: 100,
			}, {
				y: 0,
			}, 1)
	}, [])

	// blackout the video on scroll down
	useEffect(() => {
		let video = document.querySelector("video")
		window.addEventListener("scroll", function () {
			let value = 0.7 + window.scrollY / -1000
			video.style.opacity = value
		})
	}, [])

	return (
		<Layout>
			<section className="landing full-bleed">
				<video
					className="video-full-screen"
					poster="/images/showreel.jpg"
					src="/images/showreel.m4v"
					muted
					playsInline
					autoPlay
					loop
				/>

				<div className="linear-gradient-div1"></div>
				<div className="linear-gradient-div2"></div>
				<div className="linear-gradient-div3"></div>

				<div className="landing-content">
					<h1 ref={heading1} className="landing-content-title">
						<span>be</span>
						<span>wild</span>
					</h1>
					<h1 ref={heading2} className="landing-content-title">
						<span>move</span>
						<span>on</span>
					</h1>
				</div>
			</section>

			<section className="skills">
				<TextRevealAnimation>
					<h3>what i do?</h3>
				</TextRevealAnimation>
			</section>
		</Layout>
	)
}
