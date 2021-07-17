export default function Footer() {
	return (
		<footer className="footer">

			<div className="footer-heading">
				<button className="footer-btn-cta">
					<h2>
						<a
							target="_blank"
							href="mailto:info@osmanthewho.com?subject=Hi Osman! I'm contacting because..."
						>
							hit me up!
						</a>
					</h2>
				</button>
			</div>

			<p className="footer-mail">
				<a
					target="_blank"
					href="mailto:info@osmanthewho.com?subject=Hi Osman! I'm contacting because..."
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
