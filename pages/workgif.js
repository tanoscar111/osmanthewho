import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'
import ClientOnly from '../components/constants/ClientOnly'
import useWindowWidth from '../hooks/useWindowWidth'

const gf = new GiphyFetch("4957kAcHKGnncRNk7qqzKn1N5o9bHohP");
export const getServerSideProps = async () => {
	const { data } = await gf.gifs([
		"7YihPFNRH0GU9NGaRt",
		"kFBglFnPtvlQn5k3uB",
		"4FpwWe3jay0I5WYdJf",
		"vlAFEr3HFGf9nsW43S",
		"QYtmJAkR8STjJ6kmeM",
		"LnaLrBbOwSkpfT2Yjx",
		"YLtsUfroNDjno8q1MH",
		"PoV2crzAgRoFZhR5rv",
		"7Sw0vVD2Nj2MXNO2cB",
		"5rvbjla0ic8y85KAZV",
		"BTspWq5jRd2QTHwICy",
		"q0PfxxVSqk0RTyThEU",
		"r8yEoWu6JSp6W5R438",
		"eJc6nK5xoHD2jMC8mP",
		"ovN710as1hM9lmE4fA",
	]);
	return {
		props: {
			gifs: data
		}
	}
}

export default function WorkGif({ gifs }) {
	const width = useWindowWidth()
		return (
			<Layout>
				<SmoothScroll>
					<ClientOnly>
						{
							gifs
							? <Grid
									className="full-bleed"
									initialGifs={gifs}
									width={width}
									columns={width < 800 ? 2 : 4}
									noLink={true}
									gutter={0}
									hideAttribution={true} />
							: 'Can not upload gifs, sorry about that :('
						}
					</ClientOnly>
				</SmoothScroll>
			</Layout>
		)
	}
