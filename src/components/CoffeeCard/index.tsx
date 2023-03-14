import { ShoppingCart } from 'phosphor-react'
import coffee from '../../assets/Coffees/arabe.svg'

import {
	CoffeeCardContainer,
	CardHeader,
	Tags,
	Tag,
	Title,
	CardFooter,
	Price,
	AmountAndCart,
	AmountButtonContainer,
	LessButton,
	PlusButton,
	CartButton
} from './styles'

export function CoffeeCard() {
	return (
		<CoffeeCardContainer>
			<CardHeader>
				<img
					src={coffee}
					alt=""
				/>
				<Tags>
					<Tag>tradicional</Tag>
					<Tag>expresso</Tag>
				</Tags>
			</CardHeader>

			<Title>
				<h2>Expresso Tradicional</h2>
				<p>O tradicional café feito com água quente e grãos moídos</p>
			</Title>

			<CardFooter>
				<Price>
					<span>R$</span>
					<span>9,90</span>
				</Price>

				<AmountAndCart>
					<AmountButtonContainer>
						<LessButton> - </LessButton>
						<span>1</span>
						<PlusButton> + </PlusButton>
					</AmountButtonContainer>

					<CartButton>
						<ShoppingCart
							size={22}
							weight="fill"
						/>
					</CartButton>
				</AmountAndCart>
			</CardFooter>
		</CoffeeCardContainer>
	)
}
