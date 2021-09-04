import ReactPlayer from 'react-player/vimeo'

export default function VideoPlayer({ url }) {
	const playerStyles = {
	}

	return (
		<ReactPlayer
			url={url}
			playing
			controls
			width="100%"
			height="90%"
			style={playerStyles}
		/>
	)
}
