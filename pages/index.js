import { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"

export default function Home() {
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
					muted
					playsInline
					autoPlay
					loop
					className="video-full-screen"
					src="/showreel.m4v"
					poster="/showreel.png"
				/>
				<div className="linear-gradient-div"></div>
				<div className="landing-content center-content">
					<h1 className="landing-content-title">BE WILD</h1>
					<h1 className="landing-content-title">HAVE MOVE</h1>
				</div>
			</div>
			<div className="skills center-content">
				<h2>skills</h2>
			</div>
		</Layout>
	)
}
