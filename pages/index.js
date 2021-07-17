import { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
import { TextRevealAnimation } from '../components/animations/TextRevealAnimation'

export default function Home() {

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
					poster="/images/showreel.png"
					src="/images/showreel.m4v"
					muted
					playsInline
					autoPlay
					loop
				/>

				<div className="linear-gradient-div"></div>

				<div className="landing-content">
					<h1 className="landing-content-title">
						<div><span>be</span></div>
						<div><span>wild</span></div>
					</h1>
					<h1 className="landing-content-title">
						<div><span>be</span></div>
						<div><span>moved</span></div>
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
