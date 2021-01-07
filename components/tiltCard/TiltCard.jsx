import Tilt from "react-parallax-tilt"

export default function TiltCard() {
	return (
		<Tilt
			className="tilt"
			glareEnable={true}
			glareMaxOpacity={0.7}
			glareColor="black"
			glarePosition="all"
			scale={1.06}
			transitionSpeed={1000}
			gyroscrope={true}
			tiltMaxAngleX={45}
			tiltMaxAngleY={45}
		>
			<img
				src="/images/osman/lezmove.png"
				alt="Osman Işık"
				className="tilt-photo-back"
			/>
			<img
				src="/images/osman/lezmove-bg-removed.png"
				alt="Osman Işık"
				className="tilt-photo-front"
			/>
			<div className="tilt-title-container center-content text-stroke">
				<div>THE</div>
				<div>WHO</div>
			</div>
		</Tilt>
	)
}
