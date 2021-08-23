import { useEffect, useRef } from "react"
import Head from "next/head"
import Image from 'next/image'
import Layout from "../components/constants/Layout"
import { TextReveal, TextRevealPinned } from '../components/animations/TextReveal'
import { Parallax, ParallaxOverflow } from '../components/animations/Parallax'
import { FadeIn, FadeInStagger } from '../components/animations/FadeIn'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
	// blackout the video on scroll down
	useEffect(() => {
		let video = document.querySelector("video")
		window.addEventListener("scroll", function () {
			let value = 0.7 + window.scrollY / -1000
			video.style.opacity = value
		})
	}, [])

	const plus =  useRef()
	const overlay =  useRef()
	useEffect(() => {
		gsap.to(plus.current, {
			  scale: 100,
			scrollTrigger: {
				trigger: overlay.current,
				markers: true,
				start: "top top",
				end: "bottom top",
				scrub: true,
				pin: true,
			}
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
					<h3 className="down-arrow">▾</h3>
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
				{
					/*
				<TextRevealPinned>
					<h3>what i do</h3>
					<h3>i make films</h3>
					<h3>creative direction</h3>
					<h3>content production</h3>
					<h3>directory of photography</h3>
				</TextRevealPinned>
				<Parallax>
					<div id="img-wrapper_1-1" className="image-wrapper" data-speed="0.2">
						<ParallaxOverflow>
							<Image
								src='/images/skills/1-1.webp'
								objectFit="contain"
								width="1366"
								height="570"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_1-2" className="image-wrapper" data-speed="0.2">
						<ParallaxOverflow>
							<Image
								src='/images/skills/1-2.webp'
								objectFit="contain"
								width="640"
								height="360"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_1-3" className="image-wrapper" data-speed="0.2">
						<ParallaxOverflow>
							<Image
								src='/images/skills/1-3.webp'
								objectFit="contain"
								width="519"
								height="369"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-1" className="image-wrapper" data-speed="0.7">
						<ParallaxOverflow>
							<Image
								src='/images/skills/2-1.webp'
								objectFit="contain"
								width="1080"
								height="1350"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-2" className="image-wrapper" data-speed="0.6">
						<ParallaxOverflow>
							<Image
								src='/images/skills/2-2.webp'
								objectFit="contain"
								width="640"
								height="800"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-3" className="image-wrapper" data-speed="0.5">
						<ParallaxOverflow>
							<Image
								src='/images/skills/2-3.webp'
								objectFit="contain"
								width="750"
								height="938"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_3-1" className="image-wrapper" data-speed="0.8">
						<ParallaxOverflow>
							<Image
								src='/images/skills/3-1.webp'
								objectFit="contain"
								width="480"
								height="853"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_3-2" className="image-wrapper" data-speed="1.2">
						<ParallaxOverflow>
							<Image
								src='/images/skills/3-2.webp'
								objectFit="contain"
								width="640"
								height="1138"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_3-3" className="image-wrapper" data-speed="1.1">
						<ParallaxOverflow>
							<Image
								src='/images/skills/3-3.webp'
								objectFit="contain"
								width="320"
								height="569"
								loading="eager"
							/>
						</ParallaxOverflow>
					</div>
				</Parallax>
						*/
				}
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
			<section className="featured-productions full-bleed">
				<div className="overlay" ref={overlay}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 4519 3213"
						preserveAspectRatio="xMidYMid slice"
						className="plus"
						ref={plus}
					>
						<path fill="black"
							d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
							fill-rule="evenodd"></path>
					</svg>
				</div>
			</section>
		</Layout>
	)
}
