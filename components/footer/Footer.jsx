export default function Footer() {
	return (
		<footer className="footer full-bleed">
			<div className="letsmeet">Let's meet</div>

			<div className="footer-main">
				<a
					target="_blank"
					href="mailto:info@osmanthewho.com?subject=Hi Osman! I'm contacting because..."
					className="mail"
				>
					info@osmanthewho.com
				</a>
				<hr />
				<div className="social">
					<a target="_blank" href="https://www.instagram.com/osmanthewho/">
						<img src="../../icons/social/instagram.svg" alt="Instagram" />
					</a>
					<a target="_blank" href="https://youtube.com/osmanthewho">
						<img src="../../icons/social/youtube.svg" alt="YouTube" />
					</a>
					<a target="_blank" href="https://www.behance.net/osmanthewho">
						<img src="../../icons/social/behance.svg" alt="Behance" />
					</a>
					<a target="_blank" href="https://vimeo.com/osmanthewho/">
						<img src="../../icons/social/vimeo.svg" alt="Vimeo" />
					</a>
					<a target="_blank" href="https://tr.linkedin.com/in/osmanthewho">
						<img src="../../icons/social/linkedin.svg" alt="LinkedIn" />
					</a>
					<a target="_blank" href="https://twitter.com/osmanthewho">
						<img src="../../icons/social/twitter.svg" alt="Twitter" />
					</a>
				</div>

				{/*
					<div className="copyright">
						© 2021 · OsmanThewho — Code by Yunus Emre.
					</div>
				*/}
			</div>
		</footer>
	)
}
