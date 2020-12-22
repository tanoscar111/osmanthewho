import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='footer'>

			<div className='footer-headline'>
				<h2>LET'S MAKE</h2>
				<h1>GREAT THINGS TOGETHER.</h1>
				<button className='button-cta'>
					<h2>
						<Link href="/contact">
							<a>HIT ME UP ➤</a>
						</Link>
					</h2>
				</button>
			</div>

			<Link href='/'>
				<a className='footer-logo'>
					<img src="../../images/osman/osmanthewho.png" alt="osmanthewho" />
				</a>
			</Link>

			<p className='footer-punchline'>Enough about me, tell me about you.</p>

			<div className='footer-social'>
					<a target='_blank' href='https://www.instagram.com/osmanthewho/'><img src="../../icons/social/instagram.svg" alt="Instagram" /></a>
					<a target='_blank' href='https://youtube.com/osmanthewho'><img src="../../icons/social/youtube.svg" alt="YouTube" /></a>
					<a target='_blank' href='https://vimeo.com/osmanthewho/'><img src="../../icons/social/vimeo.svg" alt="Vimeo" /></a>
					<a target='_blank' href='https://www.behance.net/osmanthewho'><img src="../../icons/social/behance.svg" alt="Behance" /></a>
			</div>

			<div className='footer-email'><a target='_blank' href="mailto:info@osmanthewho.com">info@osmanthewho.com</a></div>

			<span className='blank-span'></span>

			<p className='footer-copyright'>©Made with ♥ by Yunus Emre.</p>

		</footer>
	)
}
