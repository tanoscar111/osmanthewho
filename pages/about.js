import Head from "next/head"
import Layout from "../components/constants/Layout"
import Tilt from "react-parallax-tilt"
import Footer from "../components/footer/Footer"

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About Osman Işık</title>
			</Head>

			<section className="about-hero center-content">
				<div>
						<span>FILM</span>
						<span>MAKER</span>
				</div>
				<div>
						<span>STORY</span>
						<span>TELLER</span>
				</div>
				<div>
						<span>DIRECTOR</span>
				</div>
			</section>

			<section className="intro">
				<Tilt
					className="tilt"
					glareEnable={true}
					glareMaxOpacity={0.7}
					glareColor="black"
					glarePosition="all"
					scale={1.04}
					transitionSpeed={1000}
					gyroscrope={true}
					tiltMaxAngleX={3}
					tiltMaxAngleY={3}
				>
					<img
						src="/images/osman/lezmove.png"
						alt="Osman Işık"
						className="tilt-photo-back"
					/>
					<img
						src="/images/osman/lezmove-bg-removed.png"
						alt="Osman Işık"
						className="tilt-photo-front"
					/>
					<div className="tilt-title-container center-content text-stroke">
						<h2>THE</h2>
						<h2>WHO</h2>
					</div>
				</Tilt>
				<div className="intro-text">
					<p>
						I promote living the life to the fullest and seeing the world
						through an optimistic lens.
					</p>
					<p>
						I'm Osman Işık. I'm a filmmaker, photographer, designer and director
						living in Turkey. I produce creative content for brands and artists.
					</p>
					<p>
						You can take a look at and see what I'm doing on my{" "}
						<a href="https://www.instagram.com/osmanthewho" target="_blank">
							Instagram
						</a>{" "}
						account. I'm available for freelance work.
					</p>
				</div>
			</section>
		</Layout>
	)
}
