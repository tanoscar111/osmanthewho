import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'
import { motion } from 'framer-motion'

export default function Home() {
	useEffect(() => {
		const h1 = document.getElementById("h1")
		console.log(h1.style)
		document.addEventListener('scroll', (e) => {
			let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
			h1.style.setProperty('--percentage', `${scrolled * 100}%`)
		})
		let video = document.querySelector('video')
		window.addEventListener('scroll', function() {
			let value = 0.4 + window.scrollY / -1300
			video.style.opacity = value
		})
	}, [])

  return (
		<Layout>
			<SmoothScroll>
				<div className='landing full-bleed'>
					<video preload="true" muted autoPlay loop className="video-full-screen" src="/showreel.m4v" />
					<div className='landing-content'>
						<h1 className="landing-content-title">BE WILD HAVE MOVE</h1>
						<p className="landing-content-subtitle">Kurumus bogazim apple adobe gotten skm</p>
					</div>
				</div>
				<div className="skills">
					<h1 id="h1">LET ME SHOW YOU WHAT I DO</h1>
				</div>
			</SmoothScroll>
		</Layout>
  )
}
