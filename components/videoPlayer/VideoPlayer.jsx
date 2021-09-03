import ReactPlayer from 'react-player/vimeo'

export default function VideoPlayer({url}) {
	return (
		<ReactPlayer
			url={url}
			playing
			controls
			width="100%"
			height="calc(100vh - 200px)"
			className="test"
		>
		</ReactPlayer>
	)
}
