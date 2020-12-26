import Link from 'next/link'
import useHover from '../../hooks/useHover'

export default function VideoGallery() {
	//const [hoverRef1, isHovered1] = useHover();

	return (
		<div class="video-gallery-container-container">
			<div className="video-gallery-container">
				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-480-270'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/q0PfxxVSqk0RTyThEU/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-480-270'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/4FpwWe3jay0I5WYdJf/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-480-270'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/PoV2crzAgRoFZhR5rv/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-480-270'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/BTspWq5jRd2QTHwICy/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-480-270'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/eJc6nK5xoHD2jMC8mP/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-480-270'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/YLtsUfroNDjno8q1MH/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-440-550'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/kFBglFnPtvlQn5k3uB/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

				<div className="video">
					<Link href="/work">
						<a>
							<div className='video-thumbnail px-440-550'>
								<video autoPlay="autoplay" loop src="https://media.giphy.com/media/LnaLrBbOwSkpfT2Yjx/giphy.mp4" />
							</div>
						</a>
					</Link>
				</div>

			{
				/*
					<div className="video">
						<Link href="/work">
							<a>
								<div className='video-thumbnail px-480-209'>
									<video autoPlay="autoplay" loop src="https://media.giphy.com/media/7YihPFNRH0GU9NGaRt/giphy.mp4" />
								</div>
							</a>
						</Link>
					</div>
				*/
			}


			</div>
		</div>
	)
}
