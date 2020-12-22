import { useState, useEffect } from 'react'

export default function ClientOnly({ children }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return children
}
