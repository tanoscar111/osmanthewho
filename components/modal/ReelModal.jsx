import 'react-responsive-modal/styles.css'
import ReactPlayer from 'react-player/vimeo'
import { Modal } from 'react-responsive-modal'

export default function ReelModal({ open, setOpen }) {
	return (
		<>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				closeIconId="reel-close-button"
				modalId="reel-modal"
				styles={{
          overlay: {
            background: "black",
          }
        }}
			>
				<ReactPlayer
					url="https://vimeo.com/331442093"
					playing
					controls
					width="100%"
					height="100%"
				/>
			</Modal>
		</>
	)
}
