import styled from 'styled-components'

export const InputContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2.625rem;
	border-radius: 4px;
	overflow: hidden;

	border: 1px solid ${(props) => props.theme['base-button']};
	background: ${(props) => props.theme['base-input']};
	&:focus-within {
		border-color: ${(props) => props.theme['yellow-dark']};
	}
`

export const InputStyle = styled.input`
	font-size: 0.875rem;
	flex: 1;
	border: 0;
	outline: 0;
	background: 0;
	height: 100%;
	padding: 0 0.75rem;

	color: ${(props) => props.theme['base-text']};
	&::placeholder {
		color: ${(props) => props.theme['base-label']};
	}
`

export const OptionalText = styled.p`
	font-size: 0.75rem;
	font-style: italic;
	margin-right: 0.75rem;
	color: ${(props) => props.theme['base-label']};
`
