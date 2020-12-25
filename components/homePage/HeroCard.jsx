import Tilt from 'react-parallax-tilt'

export default function HeroCard() {
	return (
		<Tilt
			className="tilt"
			glareEnable={true}
			glareMaxOpacity={0.40}
			scale={1.1}
			transitionSpeed={2000}
		>
			<div className="landing-photo-container">
					<img src="/images/osman/lezmove.png"
							 alt="Osman Işık"
							 className='landing-photo-back' />
					<img src="/images/osman/lezmove-bg-removed.png"
							 alt="Osman Işık"
							 className='landing-photo-front' />
			</div>
			<div className="landing-title-container">
				<div>OSMAN IŞIK</div>
				<div>CREATIVE</div>
				<div>CONTENT</div>
				<div>MANAGER</div>
			</div>
		</Tilt>
	)
}
