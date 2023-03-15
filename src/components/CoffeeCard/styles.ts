import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	max-width: 16rem;
	border-radius: 6px 36px 6px 36px;
	padding: 1.25rem;
	padding-top: 0;

	background: ${(props) => props.theme['base-card']};
`

export const CardHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 7.5rem;
		height: 7.5rem;
		margin-top: -1.25rem;
	}
`

export const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 0.75rem;
	margin-bottom: 1rem;
	width: 100%;
	gap: 0.25rem;
`

export const Tag = styled.span`
	background: ${(props) => props.theme['yellow-light']};
	color: ${(props) => props.theme['yellow-dark']};
	font-size: 0.625rem;
	font-weight: 700;
	padding: 0.25rem 0.5rem;
	border-radius: 999px;
	line-height: 130%;
	text-transform: uppercase;
`

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		color: ${(props) => props.theme['base-subtitle']};
		font-family: 'baloo 2', sans-serif;
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 130%;
		margin-bottom: 0.5rem;
	}
	p {
		color: ${(props) => props.theme['base-label']};
		font-size: 0.875rem;
		line-height: 130%;
	}
`

export const CardFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2.06rem;
	width: 100%;
`

export const Price = styled.div`
	font-family: 'Baloo 2', sans-serif;
	font-size: 1.5rem;
	font-weight: 800;

	span:first-child {
		font-size: 0.875rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}
`

export const AmountAndCart = styled.div`
	display: flex;
	gap: 0.5rem;
`

export const CartButton = styled.button`
	background: ${(props) => props.theme['purple-dark']};
	color: ${(props) => props.theme['base-card']};
	padding: 0.5rem 0.5rem 0.375rem 0.5rem;
	border-radius: 6px;
	cursor: pointer;
	border: 0;
	&:hover {
		background: ${(props) => props.theme['purple-color']};
	}
`

export const AmountButtonContainer = styled.div`
	background: ${(props) => props.theme['base-button']};
	display: flex;
	align-items: center;
	border-radius: 6px;
	gap: 0.25rem;
`

const AmountButtons = styled.button`
	background: transparent;
	color: ${(props) => props.theme['purple-color']};
	font-size: 1.25rem;
	cursor: pointer;
	border: 0;
`

export const LessButton = styled(AmountButtons)`
	font-size: 1.25rem;
	padding-left: 0.5rem;
	padding-right: 0.25rem;
`
export const PlusButton = styled(AmountButtons)`
	font-size: 1.25rem;
	padding-left: 0.25rem;
	padding-right: 0.5rem;
`
