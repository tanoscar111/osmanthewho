import Layout from "../components/constants/Layout"
import SmoothScroll from "../components/constants/SmoothScroll"
import VideoGallery from "../components/videoGallery/VideoGallery"

export default function Work() {
	return (
		<Layout>
			<SmoothScroll>
				<VideoGallery />
			</SmoothScroll>
		</Layout>
	)
}
