import Head from "next/head"
import Layout from "../components/constants/Layout"
import Footer from "../components/footer/Footer"

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About Osman Işık</title>
			</Head>

			<section className="about-hero">
				<h1>
					<span>FILM</span>
					<span>MAKER</span>
				</h1>
				<h1>
					<span>CREATIVE</span>
				</h1>
				<h1>
					<span>DIRECTOR</span>
				</h1>
				<h1>
					<span>EDITOR</span>
				</h1>
			</section>

			<section className="intro">
					<img
						src="/images/osman.jpg"
						alt="Osman Işık"
					/>
				<div className="intro-text">
					<h3>Osman Işık</h3>
					<br />
					<hr />
					<br />
					<p>
						I promote living the life to the fullest and seeing the world
						through an optimistic lens.
					</p>
					<p>
						I'm Osman. I'm a filmmaker, photographer, designer and director
					  in Turkey. I produce creative content for brands and artists.
					</p>
					<p>
						You can visit my{" "}
						<a href="https://www.instagram.com/osmanthewho" target="_blank">
							Instagram
						</a>{" "}
						account to see my jobs. I'm available for freelance work.
					</p>
					<p>
						Dolor magni fugit voluptas nulla eius. Porro sequi dolorem
						necessitatibus nihil rem Mollitia laborum libero eos!
					</p>
				</div>
			</section>
		</Layout>
	)
}
