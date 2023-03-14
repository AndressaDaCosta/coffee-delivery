import styled from 'styled-components'

// define available background colors
export type BackgroundColorType = 'yellow' | 'orange' | 'gray' | 'purple'

// map background color types to class names for styling
const backgroundColorType = {
	yellow: 'yellow-color',
	orange: 'yellow-dark',
	gray: 'base-text',
	purple: 'purple-color'
} as const

// define type for Icon component props
interface IconStylesProps {
	backgroundColor: BackgroundColorType
}

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`

export const Icon = styled.div<IconStylesProps>`
	line-height: 0;
	padding: 0.5rem;
	border-radius: 50%;
	font-size: 1rem;
	color: ${(props) => props.theme['background-color']};
	background: ${(props) =>
		props.theme[backgroundColorType[props.backgroundColor]]};
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`
