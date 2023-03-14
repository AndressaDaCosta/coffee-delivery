import { ReactNode } from 'react'
import {
	Icon,
	IconContainer,
	TextContainer,
	BackgroundColorType
} from './styles'

interface InfoIconProps {
	icon: ReactNode
	text: string
	backgroundColor: BackgroundColorType
}

export function InfoIcon({ icon, text, backgroundColor }: InfoIconProps) {
	return (
		<IconContainer>
			<Icon backgroundColor={backgroundColor}>{icon}</Icon>
			<TextContainer>
				<p>{text}</p>
			</TextContainer>
		</IconContainer>
	)
}
