import styled from 'styled-components'

export const DivContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const ImageBackground = styled.img`
	background: url(https://raw.githubusercontent.com/AndressaDaCosta/coffee-delivery/88a80b8165ace4e76564e4dcb9c201e5ba25be9b/src/assets/Background.svg);
	filter: blur(50px);
	width: 100%;
	height: 34rem;
	position: absolute;
	top: 0;
`

export const IntroContainer = styled.section`
	width: 100%;
	max-width: 71rem;
	display: flex;
	justify-content: center;
	margin-top: 5.87rem;
	margin-bottom: 6.75rem;
	position: relative;
	gap: 3.5rem;
`

export const IntroInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4.125rem;
`

export const IntroTitle = styled.div`
	gap: 1rem;

	h1 {
		font-family: 'Baloo 2', sans-serif;
		font-size: 3rem;
		font-weight: 800;
		line-height: 130%;
		color: ${(props) => props.theme['base-title']};
	}
	p {
		font-size: 1.25rem;
		line-height: 130%;
		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const IntroItems = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	row-gap: 1.25rem;

	div {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	div svg {
		line-height: 0;
		padding: 0.35rem;
		border-radius: 9999px;
		font-size: 1rem;
		color: ${(props) => props.theme['white-color']};
		background: ${(props) => props.theme['purple-dark']};
	}
`

export const SectionCoffee = styled.section`
	width: 100%;
	max-width: 75rem;

	> h2 {
		/* margin: 2rem 0 3rem 4rem; */
		margin: 2rem;
	}
`

export const CoffeeList = styled.div`
	width: 100%;
	/* max-width: 90rem; */
	display: flex;
	/* margin-top: 2rem; */
	margin: 2rem auto;
	flex-wrap: wrap;
	gap: 2rem;
`
