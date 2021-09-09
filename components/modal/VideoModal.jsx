import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import VideoPlayer from "../videoPlayer/VideoPlayer"

export default function VideoModal({ open, setOpen, url, title }) {
	return (
		<>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				closeIconId="close-button"
				modalId="modal"
				styles={{
          overlay: {
            background: "rgba(0, 0, 0, 0.98)",
          }
        }}
			>
				<h3 className="video-title">{title}</h3>
				<VideoPlayer url={url} />
			</Modal>
		</>
	)
}
