import { useState } from "react"
import Menu from "./Menu"
import MenuToggle from "./MenuToggle"

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<Menu isMenuOpen={isMenuOpen} />
			<MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</>
	)
}
