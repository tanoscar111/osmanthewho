import { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/constants/Layout"
import { TextReveal, TextRevealPinned } from '../components/animations/TextReveal'
import { Parallax, ParallaxOverflow } from '../components/animations/Parallax'
import { FadeIn, FadeInStagger } from '../components/animations/FadeIn'

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
						<div><span>stay</span></div>
						<div><span>wild</span></div>
					</h1>
					<h1 className="landing-content-title">
						<div><span>have</span></div>
						<div><span>move</span></div>
					</h1>
				</div>
			</section>

			<section className="self-intro">
				<TextReveal>
					<p>
						I promote living your life to the fullest and <br />
						seeing the world through an optimistic lens.
					</p>
					<p>
						I'm Osman. I'm a filmmaker, photographer, <br />
						designer and director in Turkey.
					</p>
					<p>
						I produce creative contents for brands. <br />
						Hit me up to collab!
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
				<Parallax>
					<div id="img-wrapper_1-1" className="image-wrapper" data-speed="0.2"><ParallaxOverflow><img src="/images/skills/1-1.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_1-2" className="image-wrapper" data-speed="0.2"><ParallaxOverflow><img src="/images/skills/1-2.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_1-3" className="image-wrapper" data-speed="0.2"><ParallaxOverflow><img src="/images/skills/1-3.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_2-1" className="image-wrapper" data-speed="0.7"><ParallaxOverflow><img src="/images/skills/2-1.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_2-2" className="image-wrapper" data-speed="0.6"><ParallaxOverflow><img src="/images/skills/2-2.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_2-3" className="image-wrapper" data-speed="0.5"><ParallaxOverflow><img src="/images/skills/2-3.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_3-1" className="image-wrapper" data-speed="0.8"><ParallaxOverflow><img src="/images/skills/3-1.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_3-2" className="image-wrapper" data-speed="1.2"><ParallaxOverflow><img src="/images/skills/3-2.jpg"/></ParallaxOverflow></div>
					<div id="img-wrapper_3-3" className="image-wrapper" data-speed="1.1"><ParallaxOverflow><img src="/images/skills/3-3.jpg"/></ParallaxOverflow></div>
				</Parallax>
			</section>

			<section className="brands">
				<FadeIn>
					<p>I've worked with great artists and brands. There is love for them all.</p>
				</FadeIn>
				<FadeInStagger>
					<img src="/images/brands/samsung.png" alt="Samsung" />
					<img src="/images/brands/trt.png" alt="TRT" />
					<img src="/images/brands/altinpusula.png" alt="Altın Pusula" />
					<img src="/images/brands/aydindogan.png" alt="Aydın Doğan Vakfı" />
					<img src="/images/brands/yildizholding.png" alt="Yıldız Holding" />
				</FadeInStagger>
			</section>
		</Layout>
	)
}
