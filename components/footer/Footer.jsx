import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='footer'>

			<div className='footer-headline'>
				<h2>LET'S MAKE</h2>
				<h1>GREAT THINGS TOGETHER.</h1>
				<button className='button-cta'>
					<h2>HIT ME UP ➤</h2>
				</button>
			</div>

			<Link href='#'>
				<a className='footer-logo'>
					<img src="../../images/osman/osmanthewho.png" alt="osmanthewho" />
				</a>
			</Link>

			<p className='footer-punchline'>Enough about me, tell me about you.</p>

			<div className='footer-social'>
					<a href='#'><img src="../../icons/social/instagram.svg" alt="Instagram" /></a>
					<a href='#'><img src="../../icons/social/youtube.svg" alt="YouTube" /></a>
					<a href='#'><img src="../../icons/social/vimeo.svg" alt="Vimeo" /></a>
					<a href='#'><img src="../../icons/social/behance.svg" alt="Behance" /></a>
			</div>

			<div className='footer-email'><Link href="#"><a>info@osmanthewho.com</a></Link></div>

			<span className='blank-span'></span>

			<p className='footer-copyright'>©Made with ♥ by Yunus Emre.</p>

		</footer>
	)
}
