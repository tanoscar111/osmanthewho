import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import VideoPlayer from "../videoPlayer/VideoPlayer"

export default function VideoModal({ open, setOpen, url, title }) {
	return (
		<div>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				center
				styles={{
          modal: {
            maxWidth: "1200px",
            width: "100%",
						margin: "auto",
						background: "none",
						boxShadow: "none",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.95)",
          },
          closeButton: {
            background: "white",
          }
        }}
			>
				<h3 className="video-title">{title}</h3>
				<VideoPlayer url={url} />
			</Modal>
		</div>
	)
}
