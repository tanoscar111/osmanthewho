export default function ProductionList({ id, title, active, setSelected, setItemsPerPage }) {
	return (
		<li
			className={active ? "production-list active" : "production-list"}
			onClick={() => {
				setSelected(id)
				setItemsPerPage(6)
			}}
		>
			{title}
		</li>
	)
}
