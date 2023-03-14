import styled from 'styled-components'

export const HeaderContainer = styled.header`
	padding-top: 2rem;
	padding-bottom: 2rem;
`
export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const CityAndCartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	a {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 6px;
		color: ${(props) => props.theme['yellow-dark']};
		background: ${(props) => props.theme['yellow-light']};
	}
`

export const Location = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 6px;
	font-size: 0.875rem;

	color: ${(props) => props.theme['purple-dark']};
	background: ${(props) => props.theme['purple-light']};

	svg {
		color: ${(props) => props.theme['purple-color']};
	}
`
