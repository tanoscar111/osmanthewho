import { useState } from 'react';

export default function Fullscreen() {
	const [isFullscreen, setIsFullscreen] = useState(false)

	const toggleFullscreen = () => {
		setIsFullscreen(prevIsFullscreen => !prevIsFullscreen)
		if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
	}

	return (
		<div className="fullscreen-wrapper" onClick={toggleFullscreen}>
			{
				isFullscreen ? (
					<img src="/icons/fullscreen-close.svg" className="fullscreen-close" />
				) : (
					<img src="/icons/fullscreen-open.svg" className="fullscreen-open" />
				)
			}
		</div>
	)
}
