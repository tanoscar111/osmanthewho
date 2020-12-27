import Tilt from 'react-parallax-tilt'

export default function HeroCard() {
	return (
		<Tilt
			className="tilt"
			glareEnable={true}
			glareMaxOpacity={0.7}
			glareColor='black'
			glarePosition='all'
			scale={1.07}
			transitionSpeed={1500}
			gyroscrope={true}
		>
			<img src="/images/osman/lezmove.png"
					 alt="Osman Işık"
					 className='tilt-photo-back' />
			<img src="/images/osman/lezmove-bg-removed.png"
					 alt="Osman Işık"
					 className='tilt-photo-front' />
			<div className="tilt-title-container">
				<div>THE</div>
				<div>WHO</div>
			</div>
		</Tilt>
	)
}
