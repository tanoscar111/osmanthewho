import Link from "next/link"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-heading center-content">
				<h4>LET'S MAKE</h4>
				<h2>GREAT THINGS TOGETHER.</h2>
				<button className="button-cta text-stroke">
					<h2>
						<Link href="/contact">
							<a>HIT ME UP ➤</a>
						</Link>
					</h2>
				</button>
			</div>

			<div className="footer-main">
				<div className="footer-contact">
					<div className="footer-email">
						<a target="_blank" href="mailto:info@osmanthewho.com">
							info@osmanthewho.com
						</a>
					</div>
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
				</div>

				<Link href="/">
					<a className="footer-logo center-content">
						<img src="../../images/osman/osmanthewho.png" alt="osmanthewho" />
					</a>
				</Link>

				<div className="footer-copyright">
					<p>
						© Made with{" "}
						<a
							target="_blank"
							href="https://www.youtube.com/watch?v=2ZIpFytCSVc"
						>
							🄱🅁🅄🄷
						</a>{" "}
						by
					</p>
					<p>Yunus Emre.</p>
				</div>
			</div>
		</footer>
	)
}
