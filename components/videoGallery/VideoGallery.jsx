import Link from 'next/link'
import useHover from '../../hooks/useHover'

export default function VideoGallery() {
	const [hoverRef1, isHovered1] = useHover();
	const [hoverRef2, isHovered2] = useHover();
	const [hoverRef3, isHovered3] = useHover();
	const [hoverRef4, isHovered4] = useHover();
	const [hoverRef5, isHovered5] = useHover();
	const [hoverRef6, isHovered6] = useHover();
	const [hoverRef7, isHovered7] = useHover();
	const [hoverRef8, isHovered8] = useHover();
	const [hoverRef9, isHovered9] = useHover();

	return (
		<div className="video-gallery-container">
			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-338'>
							{isHovered1 ? <img
								src="../images/works/gifs/showreel.gif"
								ref={hoverRef1}
							/> : <img
								src="../images/works/images/showreel.jpg"
								ref={hoverRef1}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-338'>
							{isHovered3 ? <img
								src="../images/works/gifs/istanbul.gif"
								ref={hoverRef3}
							/> : <img
								src="../images/works/images/istanbul.jpg"
								ref={hoverRef3}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-338'>
							{isHovered4 ? <img
								src="../images/works/gifs/tandem.gif"
								ref={hoverRef4}
							/> : <img
								src="../images/works/images/tandem.jpg"
								ref={hoverRef4}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-338'>
							{isHovered5 ? <img
								src="../images/works/gifs/lunar.gif"
								ref={hoverRef5}
							/> : <img
								src="../images/works/images/lunar.jpg"
								ref={hoverRef5}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-338'>
							{isHovered6 ? <img
								src="../images/works/gifs/avci.gif"
								ref={hoverRef6}
							/> : <img
								src="../images/works/images/avci.jpg"
								ref={hoverRef6}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-338'>
							{isHovered7 ? <img
								src="../images/works/gifs/2019-showreel.gif"
								ref={hoverRef7}
							/> : <img
								src="../images/works/images/2019-showreel.jpg"
								ref={hoverRef7}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-750'>
							{isHovered8 ? <img
								src="../images/works/gifs/whereami.gif"
								ref={hoverRef8}
							/> : <img
								src="../images/works/images/whereami.png"
								ref={hoverRef8}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-750'>
							{isHovered9 ? <img
								src="../images/works/gifs/kickit.gif"
								ref={hoverRef9}
							/> : <img
								src="../images/works/images/kickit.png"
								ref={hoverRef9}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>

			<article>
				<Link href="#">
					<a>
						<div className='video-thumbnail px-600-261'>
							{isHovered2 ? <img
								src="../images/works/gifs/rapid.gif"
								ref={hoverRef2}
							/> : <img
								src="../images/works/images/rapid.png"
								ref={hoverRef2}
							/>}
							<div className='video-title'>
								<h3>Title</h3>
								<span>some cool subtitle</span>
							</div>
						</div>
					</a>
				</Link>
			</article>
		</div>
	)
}
