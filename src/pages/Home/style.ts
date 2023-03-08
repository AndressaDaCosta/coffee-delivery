import styled from 'styled-components'

export const DivContainer = styled.div`
	position: relative;
`
export const ImageBackground = styled.img`
	background: url(https://raw.githubusercontent.com/AndressaDaCosta/coffee-delivery/88a80b8165ace4e76564e4dcb9c201e5ba25be9b/src/assets/Background.svg);
	filter: blur(70px);
	width: 100%;
	height: 24rem;
	position: absolute;
	top: 0;
`

export const IntroContainer = styled.section`
	display: flex;
	justify-content: center;
	gap: 3.5rem;
	margin-top: 5.87rem;
	margin-bottom: 6.75rem;
	position: relative;
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
	display: flex;
	flex-wrap: wrap;
	gap: 2.5rem;
	div {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
`

export const CoffeeList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
`
