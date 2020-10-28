import { motion } from 'framer-motion'
import Link from 'next/link'

const menuItemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	}
}

export default function MenuItem({ link }) {
	if (link === 'home') {
			return (
			<motion.li
				variants={menuItemVariants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.90 }}
			>
				<Link href="/">
					<a>{ link }</a>
				</Link>
			</motion.li>
		)
	} else {
			return (
				<motion.li
					variants={menuItemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.90 }}
				>
					<Link href={`/${ link }`}>
						<a>{ link }</a>
					</Link>
				</motion.li>
			)
	}
}
