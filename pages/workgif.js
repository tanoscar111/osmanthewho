import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import "isomorphic-fetch";
import useWindowWidth from '../hooks/useWindowWidth'

const gf = new GiphyFetch("4957kAcHKGnncRNk7qqzKn1N5o9bHohP");
export const getServerSideProps = async () => {
	const { data } = await gf.gifs([
		"PoV2crzAgRoFZhR5rv",
		"eJc6nK5xoHD2jMC8mP",
		"q0PfxxVSqk0RTyThEU",
		"kFBglFnPtvlQn5k3uB",
		"4FpwWe3jay0I5WYdJf",
		"LnaLrBbOwSkpfT2Yjx",
		"YLtsUfroNDjno8q1MH",
		"BTspWq5jRd2QTHwICy",
		"7YihPFNRH0GU9NGaRt",
	]);
	return {
		props: {
			gifs: data
		}
	}
}

export default function WorkGif({ gifs }) {
	const width = useWindowWidth()
	if (typeof width !== 'undefined') {
		return (
			<Layout>
				<SmoothScroll>
					{
						gifs
						? <Grid
								className="full-bleed"
								initialGifs={gifs}
								width={width}
								columns={width < 800 ? 2 : 3}
								noLink={true}
								gutter={0}
								hideAttribution={true} />
						: <h1>:D</h1>
					}
				</SmoothScroll>
			</Layout>
		)
	} else {
		return <h1>:D</h1>
	}
}
