import styled from 'styled-components'

export const CheckoutContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
`
export const AddressAndPayment = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`
export const Title = styled.h3`
	font-size: 1.125rem;
	font-family: 'Baloo 2', sans-serif;
	font-weight: bold;
	line-height: 130%;
	margin-top: 2.5rem;
	margin-bottom: 0.938rem;
	color: ${(props) => props.theme['base-subtitle']};
`

export const FormContainer = styled.div`
	width: 100%;
	max-width: 40rem;
	padding: 2.5rem;
	border-radius: 6px;

	background: ${(props) => props.theme['base-card']};
`

export const FormHeader = styled.header`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;

	span {
		font-size: 1.375rem;
		color: ${(props) => props.theme['yellow-dark']};
	}

	div {
		gap: 0.125rem;

		h4 {
			font-size: 1rem;
			font-weight: 400;
			line-height: 130%;
			color: ${(props) => props.theme['base-title']};
		}

		p {
			font-size: 0.875rem;
			color: ${(props) => props.theme['base-label']};
		}
	}
`

export const Form = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 12.5rem 17.25rem 3.75rem;
	column-gap: 0.75rem;
	row-gap: 1rem;
	grid-auto-flow: dense;
`
export const PaymentOptions = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	max-width: 40rem;
	padding: 2.5rem;
	border-radius: 6px;

	background: ${(props) => props.theme['base-card']};
`

export const ConfirmOrder = styled.div``
