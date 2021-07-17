import Link from 'next/link'

export default function Logo() {
	return (
		<Link href="/">
			<div className="logo-wrapper">
				<img className="logo-img" src="/images/osmanthewho.png" alt="OsmanTheWho Logo" />
			</div>
		</Link>
	)
}
