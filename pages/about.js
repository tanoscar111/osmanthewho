import Head from "next/head"
import Layout from "../components/constants/Layout"
import SmoothScroll from "../components/constants/SmoothScroll"
import TiltCard from "../components/tiltCard/TiltCard"
import SlideOnScroll from "../components/slideOnScroll/SlideOnScroll"

export default function About() {
	return (
		<Layout>
			<SmoothScroll>
				<Head>
					<title>About Osman Işık</title>
				</Head>

				<SlideOnScroll />

				<section className="intro">
					<div className="tilt-card-container-osman">
						<TiltCard />
					</div>
					<div className="intro-text">
						<p>
							I promote living the life to the fullest and seeing the world
							through an optimistic lens.
						</p>
						<p>
							I'm Osman Işık. I'm a filmmaker, photographer, designer and
							director living in Turkey. I produce creative content for brands
							and artists.
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
			</SmoothScroll>
		</Layout>
	)
}
