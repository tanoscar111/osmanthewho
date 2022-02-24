import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export default function Works() {
	const [thumbnails, setThumbnails] = useState([])

	const container = useRef()
	const thumbnailList = []
	const minWidth = 30
	const maxWidth = 60

	const createThumbnail = () => {
		const randWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth
		const randHeight = randWidth / 2

		const pixelWidth = document.documentElement.clientWidth * randWidth / 100
		const pixelHeight = document.documentElement.clientWidth * randHeight / 100

		const randX = Math.floor(Math.random() * (container.current.offsetWidth - pixelWidth))
		const randY = Math.floor(Math.random() * (container.current.offsetHeight - pixelHeight))

		let minDistanceX
		let minDistanceY

		let overlap = false
		for (const i = 0; i < thumbnailList.length; i++) {
			const other = thumbnailList[i]

			if (other.pixelWidth > pixelWidth) {
				minDistanceX = other.pixelWidth / 1.5
				minDistanceY = other.pixelHeight / 1.5
			} else {
				minDistanceX = pixelWidth / 1.5
				minDistanceY = pixelHeight / 1.5
			}


			let distanceX = Math.abs(other.randX - randX)
			let distanceY = Math.abs(other.randY - randY)

			if (distanceX <= minDistanceX && distanceY <= minDistanceY) {
				overlap = true
				break
			}
		}

		if (!overlap) {
			thumbnailList.push({
				randWidth,
				randHeight,
				pixelWidth,
				pixelHeight,
				randX,
				randY,
			})
		}
	}

	useEffect(() => {
		let protection = 0

		while (thumbnailList.length < 7) {
		//for (const i = 0; i < 3; i++) {
			createThumbnail()

			protection++
			if (protection > 1000000)
				break
		}
		 setThumbnails(thumbnailList)



		class El {
				constructor(element) {
						this.element = document.querySelector(element)
				}
				scrollElement() {
						window.addEventListener('mousemove', (e) => {
								let eX = this.element.offsetWidth // container genisligi
								let eY = this.element.offsetHeight // container yuksekligi
								let cX = e.clientX  // pointerin soldan uzakligi
								let cY = e.clientY // pointerin yukardan uzakligi
								let wX = window.innerWidth
								let wY = window.innerHeight
								let difX = eX - wX
								let difY = eY - wY

								let tX = gsap.utils.mapRange(0, window.innerWidth, 0, -difX);
								let tY = gsap.utils.mapRange(0, window.innerHeight, 0, -difY);

								gsap.to(this.element, .5, {
										x: tX(cX),
										y: tY(cY)
								})
						})
				}
		}

		const el = new El('#thumbnail-container')
		el.scrollElement()


	}, [])

	return (
		<div ref={container} id="thumbnail-container">
			{thumbnails.map((thumbnail, i)=> (
			 <div
				 key={i}
				 style={{
					 top: `${thumbnail.randY}px`,
					 left: `${thumbnail.randX}px`,
					 width: `${thumbnail.randWidth}vw`,
					 height: `${thumbnail.randHeight}vw`
				 }}
			 >
			 </div>
			))}
		</div>
	)
}
