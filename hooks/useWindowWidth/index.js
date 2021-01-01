import { useState, useEffect } from "react"

function getWindowWidth() {
	if (typeof window !== "undefined") {
		const { innerWidth: width } = window
		return width
	}
}

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(getWindowWidth())

	useEffect(() => {
		function handleResize() {
			setWindowWidth(getWindowWidth())
		}
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return windowWidth
}
