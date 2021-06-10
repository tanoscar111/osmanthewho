import Link from "next/link"

export default function Footer() {
	return (
		<footer className="footer">

			<div className="footer-heading">
				<h2>
					A PROJECT?
				</h2>
				<button className="footer-btn-cta">
					<h2>
					<Link href="/">
						<a>LET'S TALK.</a>
					</Link>
					</h2>
				</button>
			</div>

			<p className="footer-mail">
				<a
					target="_blank"
					href="mailto:info@osmanthewho.com?subject=I'm contacting because..."
				>
					info@osmanthewho.com
				</a>
			</p>

			<div className="footer-social">
				<a target="_blank" href="https://www.instagram.com/osmanthewho/">
					<img src="../../icons/social/instagram.svg" alt="Instagram" />
				</a>
				<a target="_blank" href="https://youtube.com/osmanthewho">
					<img src="../../icons/social/youtube.svg" alt="YouTube" />
				</a>
				<a target="_blank" href="https://vimeo.com/osmanthewho/">
					<img src="../../icons/social/vimeo.svg" alt="Vimeo" />
				</a>
				<a target="_blank" href="https://www.behance.net/osmanthewho">
					<img src="../../icons/social/behance.svg" alt="Behance" />
				</a>
			</div>

		</footer>
	)
}
