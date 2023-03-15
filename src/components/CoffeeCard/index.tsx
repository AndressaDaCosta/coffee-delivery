import { ShoppingCart } from 'phosphor-react'

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

interface CoffeesProps {
	id: number
	tags: string[]
	name: string
	description: string
	photo: string
	price: number
}

interface CoffeeCardProps {
	coffee: CoffeesProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	return (
		<CoffeeCardContainer>
			<CardHeader>
				<img
					src={`/src/assets/Coffees/${coffee.photo}`}
					alt=""
				/>
				<Tags>
					<Tag>
						{coffee.tags.map((tags) => (
							<span key={coffee.id}>{tags}</span>
						))}
					</Tag>
				</Tags>
			</CardHeader>

			<Title>
				<h2>{coffee.name}</h2>
				<p>{coffee.description}</p>
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
