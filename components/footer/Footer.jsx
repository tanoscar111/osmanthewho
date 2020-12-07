import Link from 'next/link'

export default function Footer() {
	return (
		<footer class='footer'>

			<Link href='#'>
				<a class='footer-logo'>
					<img src="../../icons/osman/osman-white.svg" alt="osmanthewho" />
				</a>
			</Link>

			<div className="footer-social">
					<a href='#'><img src="../../icons/social/instagram.svg" alt="Instagram" /></a>
					<a href='#'><img src="../../icons/social/youtube.svg" alt="YouTube" /></a>
					<a href='#'><img src="../../icons/social/vimeo.svg" alt="Vimeo" /></a>
					<a href='#'><img src="../../icons/social/behance.svg" alt="Behance" /></a>
			</div>

			<div className="footer-links col1">
				<Link href="#"><a>About Me</a></Link>
				<Link href="#"><a>Get Contact</a></Link>
				<Link href="#"><a>My Works</a></Link>
			</div>

			<div className="footer-links col2">
				<Link href="#"><a>info@osmanthewho.com</a></Link>
				<Link href="#"><a>(+90) 545 600 9986</a></Link>
				<Link href="#"><a>amk ne yazsam buraya</a></Link>
			</div>

			<div className="footer-cta">
				<Link href="#"><a class='button-cta'>Get in touch</a></Link>
				<div className="footer-copyright">
					© Osmanthewho 2020 All Rights Reserved.
				</div>
			</div>

		</footer>
	)
}
