import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'

export default function ContactModal() {
	const [open, setOpen] = useState(false)
	const closeIcon = (
		<svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.2002 15L0.000198364 -8.39259e-07L10.1055 15L0.000197053 30L19.2002 15Z" fill="#070F17"/>
			<path d="M10.7998 15L29.9998 30L19.8945 15L29.9998 2.28958e-07L10.7998 15Z" fill="#070F17"/>
		</svg>
  );

	return (
		<>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				closeIcon={closeIcon}
				closeIconId="contact-close-button"
				modalId="contact-modal"
				styles={{
          overlay: {
            background: "none",
          }
        }}
				classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={1000}
			>
				<div className="contact-modal-content">
					<div className="contact-heading-section contact-section">
						<h1 className="contact-heading-title">Get in touch</h1>
						<p className="contact-heading-subtext">
							Whenever, wherever. Wer're meant to work together.
						</p>
					</div>

					<div className="contact-form-section contact-section">
					<form name="contact" className="contact-form" method="post" action="">
						<input className="input" type="text" name="name" placeholder="Full Name" />
						<input className="input" type="text" name="email" placeholder="E-mail" />
						<textarea className="input text-area" type="text" name="message" placeholder="Your Message"></textarea>
						<input className="input form-submit-btn" type="submit" value="Submit" />
					</form>
					</div>

					<div className="contact-info-section contact-section">
						<div className="contact-info">
							<p className="contact-info-label">
								Phone
							</p>
							<p className="contact-info-detail">
								(+90) 5xx xxx xx xx
							</p>
						</div>
						<div className="contact-info">
							<p className="contact-info-label">
								Email
							</p>
							<p className="contact-info-detail">
								<a
									target="_blank"
									href="mailto:info@osmanthewho.com?subject=Hi Osman! I'm contacting because..."
								>
									info@osmanthewho.com
								</a>
							</p>
						</div>
						<div className="contact-info">
							<p className="contact-info-label">
								Address
							</p>
							<p className="contact-info-detail">
								<a target="_blank" href="https://goo.gl/maps/VGWB4sXd64Qz3ej56">
									Kocaeli Turkey
								</a>
							</p>
						</div>
						<div className="contact-info">
							<p className="contact-info-label">
								Follow me
							</p>
							<p className="contact-info-detail social-icons">
								<a target="_blank" href="https://www.instagram.com/osmanthewho/">
									<img className="contact-social-icons" src="../../icons/social/instagram.svg" alt="Instagram" />
								</a>
								<a target="_blank" href="https://youtube.com/osmanthewho">
									<img className="contact-social-icons" src="../../icons/social/youtube.svg" alt="YouTube" />
								</a>
								<a target="_blank" href="https://www.behance.net/osmanthewho">
									<img className="contact-social-icons" src="../../icons/social/behance.svg" alt="Behance" />
								</a>
								<a target="_blank" href="https://vimeo.com/osmanthewho/">
									<img className="contact-social-icons" src="../../icons/social/vimeo.svg" alt="Vimeo" />
								</a>
								<a target="_blank" href="https://tr.linkedin.com/in/osmanthewho">
									<img className="contact-social-icons" src="../../icons/social/linkedin.svg" alt="LinkedIn" />
								</a>
								<a target="_blank" href="https://twitter.com/osmanthewho">
									<img className="contact-social-icons" src="../../icons/social/twitter.svg" alt="Twitter" />
								</a>
							</p>
						</div>
					</div>
				</div>
			</Modal>
			<div className="cta-btn" onClick={() => setOpen(true)}>Contact</div>
		</>
	)
}
