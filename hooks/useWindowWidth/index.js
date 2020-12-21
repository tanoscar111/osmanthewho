import { useState, useEffect } from 'react'

function getWindowWidth() {
	if (typeof window !== 'undefined') {
		const { innerWidth: width } = window
		return width
	}
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
		if(typeof window !== 'undefined') {
			function handleResize() {
				setWindowWidth(getWindowWidth());
			}
			window.addEventListener('resize', handleResize);
		}
		return () => {
			if (typeof width !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		}
  }, []);

  return windowWidth;
}
