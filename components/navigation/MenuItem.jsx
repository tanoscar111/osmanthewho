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
	if (link === "home") {
		return (
			<motion.li variants={menuItemVariants}>
				<Link href="/">
					<a>{link}</a>
				</Link>
			</motion.li>
		)
	} else {
		return (
			<motion.li variants={menuItemVariants}>
				<Link href={`/${link}`}>
					<a>{link}</a>
				</Link>
			</motion.li>
		)
	}
}
