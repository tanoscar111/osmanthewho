import { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"

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
				<h2>skills</h2>
			</div>
		</Layout>
	)
}
