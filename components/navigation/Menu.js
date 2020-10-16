import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../../styles/components/navigation/Menu.module.css'

export default function Menu({ isMenuOpen }) {

	const menuVariants = {
		open: { right: 0 },
		closed: { right: '-100vw' }
	}

	return (
			<motion.nav
				className={styles.nav}
				initial={false}
				animate={ isMenuOpen ? 'open' : 'closed' }
			  variants={menuVariants}
			>
				<ul>
					<li>
						<Link href="/">
							<a>home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>about</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a>contact</a>
						</Link>
					</li>
					<li>
						<Link href="/work">
							<a>work</a>
						</Link>
					</li>
				</ul>
			</motion.nav>
	)
}

