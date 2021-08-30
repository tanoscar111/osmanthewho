export default function ProductionList({ id, title, active, setSelected }) {
	return (
		<li
			className={active ? "production-list active" : "production-list"}
			onClick={() => setSelected(id)}
		>
			{title}
		</li>
	)
}
