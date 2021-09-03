import { useState, useEffect } from 'react'
import ProductionList from "../productionList/ProductionList"
import { FadeIn, FadeInStagger } from "../animations/FadeIn"
import VideoModal from "../modal/VideoModal"
import {
	allProductions,
	commercialProductions,
	creativeProductions,
	musicVideoProductions,
} from "../../production-data"

export default function Productions() {
	const [selected, setSelected] = useState("all")
	const [data, setData] = useState([])

	const [open, setOpen] = useState(false);

	const [url, setUrl] = useState()
	const [title, setTitle] = useState()

	const list = [
		{
			id: "all",
			title: "All"
		},
		{
			id: "commercial",
			title: "Commercial"
		},
		{
			id: "creative",
			title: "Creative"
		},
		{
			id: "music-video",
			title: "Music Video"
		},
	]

	useEffect(() => {
		switch (selected) {
			case "all":
				setData(allProductions);
				break;
			case "commercial":
				setData(commercialProductions);
				break;
			case "creative":
				setData(creativeProductions);
				break;
			case "music-video":
				setData(musicVideoProductions);
				break;
			default:
				setData(allProductions);
		}
	}, [selected])

	return (
		<div className="productions" id="productions">
			<FadeIn>
				<h4>my works</h4>
			</FadeIn>
			<FadeIn>
				<h2>Featured Productions</h2>
			</FadeIn>
			<ul>
				{list.map(item => (
					<ProductionList
						key={item.id}
						id={item.id}
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
					/>
				))}
			</ul>
			<hr />
			<VideoModal open={open} setOpen={setOpen} url={url} title={title} />
			<div className="production-list-container">
				{data.map(d => (
					<div
						key={d.id}
						className="item"
						onClick={() => {
							setOpen(true)
							setUrl(d.url)
							setTitle(d.title)
						}}
					>
						<img src={d.img} />
						<span>{d.title}</span>
					</div>
				))}
			</div>
		</div>
	)
}
