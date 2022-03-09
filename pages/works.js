import { useEffect, useState } from 'react'
import { MouseOverScroll, Test } from '../components/animations/MouseOverScroll'
import { data }from "../components/selectedWorks/selected-works-data"
import Thumbnail from "../components/selectedWorks/Thumbnail"
import gsap from 'gsap'

export default function Works() {
	const [thumbnails, setThumbnails] = useState([])

	const thumbnailList = []
	const minWidth = 30
	const maxWidth = 60

	const createThumbnail = () => {
		const container = document.querySelector('#container')
		const randWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth
		const randHeight = randWidth / 2

		const pixelWidth = document.documentElement.clientWidth * randWidth / 100
		const pixelHeight = document.documentElement.clientWidth * randHeight / 100

		function getRandom(min, max) {
			return Math.random() * (max - min) + min;
		}

		const randX = getRandom((pixelWidth * 0.5), (container.offsetWidth - (pixelWidth * 1.5)))
		const randY = getRandom((pixelHeight), (container.offsetHeight - (pixelHeight * 2)))

		let minDistanceX
		let minDistanceY

		let overlap = false
		for (const i = 0; i < thumbnailList.length; i++) {
			const other = thumbnailList[i]

			if (other.pixelWidth > pixelWidth) {
				minDistanceX = other.pixelWidth / 1.25
				minDistanceY = other.pixelHeight / 1.25
			} else {
				minDistanceX = pixelWidth / 1.25
				minDistanceY = pixelHeight / 1.25
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

		while (thumbnailList.length < data.length) {
			createThumbnail()

			protection++
			if (protection > 1000000)
				break
		}
		setThumbnails(thumbnailList)

		let holder = document.querySelector('#holder'),
				wrapper = document.querySelector('#wrapper'),
				overflowX, mapPositionX,
				overflowY, mapPositionY;

		function onResize(e) {
			overflowX = holder.offsetWidth - window.innerWidth
			mapPositionX = gsap.utils.mapRange(0, window.innerWidth, overflowX / 2, overflowX / -2)
			overflowY = holder.offsetHeight - window.innerHeight
			mapPositionY = gsap.utils.mapRange(0, window.innerHeight, overflowY / 2, overflowY / -2)
		}

		function onMouseMove(e) {
			if (overflowX > 0 || overflowY > 0) {
				let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
				let y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
				gsap.to(holder, {duration: 1, overwrite: true, ease: "power3", x: mapPositionX(x), y: mapPositionY(y) })
			}
		}

		window.addEventListener("resize", onResize)
		document.addEventListener("mousemove", onMouseMove)
		document.addEventListener("touchmove", onMouseMove)
		document.addEventListener("pointermove", onMouseMove)
		onResize()

	}, [])

	return (
		<div id="wrapper">
			<div id="container">
				<div id="holder">
					{
						thumbnails.length != 0 ? (
							thumbnails.map((thumbnail, i) => (
								<Thumbnail
									key={i}
									randWidth={thumbnail.randWidth}
									randHeight={thumbnail.randHeight}
									randX={thumbnail.randX}
									randY={thumbnail.randY}
									title={data[i].title}
									img={data[i].img}
									url={data[i].url}
								>
								</Thumbnail>
							))
						) : null
					}
				</div>
			</div>
		</div>
	)
}
