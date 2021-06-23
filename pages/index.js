import { useEffect, useRef } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function Home() {

	gsap.registerPlugin(ScrollTrigger);

	// blackout the video on scroll down
	useEffect(() => {
		let video = document.querySelector("video")
		window.addEventListener("scroll", function () {
			let value = 0.7 + window.scrollY / -1000
			video.style.opacity = value
		})
	}, [])

	// define title animation reference
	const titleRef = useRef(null);

	useEffect(() => {
		gsap.from(titleRef.current, {y: 30, duration: 0.7, autoAlpha: 0, delay: 2.2});
	}, [])

	return (
		<Layout>
			<div className="landing full-bleed">
				<video
					className="video-full-screen"
					poster="/images/showreel.jpg"
					src="/images/showreel.m4v"
					muted
					playsInline
					autoPlay
					loop
				/>

				<div className="linear-gradient-div"></div>

				<div className="landing-content">
					<h1 className="landing-content-title test">
						<span>be</span>
						<span>wild</span>
					</h1>
					<h1 className="landing-content-title test">
						<span>move</span>
						<span>on</span>
					</h1>
				</div>
			</div>
			<div className="skills">
				<h3 ref={titleRef}>what i do</h3>
			</div>
		</Layout>
	)
}
