import { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
import SmoothScroll from "../components/constants/SmoothScroll"
import { motion } from "framer-motion"

export default function Home() {
	useEffect(() => {
		let video = document.querySelector("video")
		window.addEventListener("scroll", function () {
			let value = 0.4 + window.scrollY / -1300
			video.style.opacity = value
		})
	}, [])

	return (
		<Layout>
			<SmoothScroll>
				<div className="landing full-bleed center-content">
					<video
						muted
						playsInline
						autoPlay
						loop
						className="video-full-screen"
						src="/showreel.m4v"
						poster="/showreel.png"
					/>
					<div className="landing-content">
						<h1 className="landing-content-title">BE WILD HAVE MOVE</h1>
						<p className="landing-content-subtitle">
							Kurumus bogazim apple adobe gotten skm
						</p>
					</div>
				</div>
				<div className="skills center-content">
					<h1>skills goes here.</h1>
				</div>
			</SmoothScroll>
		</Layout>
	)
}
