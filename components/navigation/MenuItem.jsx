import { motion } from "framer-motion"
import Link from "next/link"

const menuItemVariants = {
	open: {
		opacity: 1,
	},
	closed: {
		opacity: 0,
	},
}

export default function MenuItem({ link }) {
	if (link === "HOME") {
		return (
			<motion.li variants={menuItemVariants}>
				<Link href="/">
					<a className="text-stroke">{link}</a>
				</Link>
			</motion.li>
		)
	} else {
		return (
			<motion.li variants={menuItemVariants}>
				<Link href={`/${link.toLowerCase()}`}>
					<a className="text-stroke">{link}</a>
				</Link>
			</motion.li>
		)
	}
}
