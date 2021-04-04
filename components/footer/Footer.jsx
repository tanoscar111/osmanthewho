import Link from "next/link"

export default function Footer() {
	return (
		<footer className="footer">

			<div className="footer-heading">
				<h2>
					CREATE THE GREAT!
				</h2>
				<button className="footer-btn-cta text-stroke">
					<h2>
					<Link href="/">
						<a>LET'S TALK. ➤</a>
					</Link>
					</h2>
				</button>
			</div>

			<a
				className="footer-mail"
				target="_blank"
				href="mailto:info@osmanthewho.com?subject=I'm contacting because..."
			>
				info@osmanthewho.com
			</a>

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

			<p className="footer-copyright">
				© Made with{" "}
				<a
					target="_blank"
					href="https://www.youtube.com/watch?v=2ZIpFytCSVc"
				>
					🄱🅁🅄🄷
				</a>
			</p>
		</footer>
	)
}
