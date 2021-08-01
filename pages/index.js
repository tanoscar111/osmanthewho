import { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
import { TextReveal, TextRevealPinned } from '../components/animations/TextReveal'

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
						<div><span>move</span></div>
						<div><span>on</span></div>
					</h1>
				</div>
			</section>

			<section className="self-intro">
				<TextReveal>
					<p>
						I promote living your life to the fullest <br />
						and seeing the world through an optimistic lens.
					</p>
					<p>
						I'm Osman. I'm a filmmaker, photographer, <br />
						designer and director in Turkey.
					</p>
					<p>
						I produce creative contents for brands. <br />
						Hit me up!
					</p>
				</TextReveal>
			</section>

			<section className="skills">
				<TextRevealPinned>
					<h3>what i do</h3>
					<h3>i make films</h3>
					<h3>creative direction</h3>
					<h3>content production</h3>
					<h3>directory of photography</h3>
				</TextRevealPinned>
				<div id="img-wrapper_1-1" className="image-container"><img src="/images/skills/1-1.jpg" alt="" /></div>
				<div id="img-wrapper_1-2" className="image-container"><img src="/images/skills/1-2.jpg" alt="" /></div>
				<div id="img-wrapper_1-3" className="image-container"><img src="/images/skills/1-3.jpg" alt="" /></div>
				<div id="img-wrapper_2-1" className="image-container"><img src="/images/skills/2-1.jpg" alt="" /></div>
				<div id="img-wrapper_2-2" className="image-container"><img src="/images/skills/2-2.jpg" alt="" /></div>
				<div id="img-wrapper_2-3" className="image-container"><img src="/images/skills/2-3.jpg" alt="" /></div>
				<div id="img-wrapper_3-1" className="image-container"><img src="/images/skills/3-1.jpg" alt="" /></div>
				<div id="img-wrapper_3-2" className="image-container"><img src="/images/skills/3-2.jpg" alt="" /></div>
				<div id="img-wrapper_3-3" className="image-container"><img src="/images/skills/3-3.jpg" alt="" /></div>
			</section>
		</Layout>
	)
}
