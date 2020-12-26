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
		>
			<img src="/images/osman/lezmove.png"
					 alt="Osman Işık"
					 className='tilt-photo-back' />
			<img src="/images/osman/lezmove-bg-removed.png"
					 alt="Osman Işık"
					 className='tilt-photo-front' />
			<div className="tilt-title-container">
				<div>HOVER</div>
				<div>ME</div>
			</div>
		</Tilt>
	)
}
