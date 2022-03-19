import { useEffect, useState, useRef } from 'react'

export default function Thumbnail({ randWidth, randHeight, randX, randY, title, img, url }) {
	const video = useRef(null)
	const [focus, setFocus] = useState(false)

	const handleMouseOver = () => setFocus(true)
	const handleMouseOut = () => setFocus(false)

	useEffect(() => {
		if (focus == true) {
			video.current.play()
		} else {
			video.current.pause()
			video.current.load()
		}
	}, [focus])

	const styles = {
		width: `${randWidth}vw`,
		height: `${randHeight}vw`,
		left: `${randX}px`,
		top: `${randY}px`,
	}

	return (
		<div
		 className="thumbnail"
		 style={styles}
		 onMouseOver={handleMouseOver}
		 onMouseOut={handleMouseOut}
		 data-size={randWidth}
		>
			<span className="thumbnail-title">{title}</span>
			<video
				className="thumbnail-video"
				//preload="none"
				playsInline
				muted
				loop
				ref={video}
				poster={img}
				src={url}
			/>
		</div>
	)
}
