import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { InfoIcon } from '../../components/InfoIcon'
import CoffeeImage from '../../assets/CoffeeDelivery.png'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../data/coffees'

import {
	IntroContainer,
	IntroInfoContainer,
	IntroTitle,
	IntroItems,
	ImageBackground,
	HomeContainer,
	CoffeeList,
	SectionCoffee
} from './styles'

export function Home() {
	return (
		<HomeContainer>
			<ImageBackground />
			<IntroContainer>
				<IntroInfoContainer>
					<IntroTitle>
						<h1>
							Encontre o café perfeito para qualquer hora do dia
						</h1>
						<p>
							Com o Coffee Delivery você recebe seu café onde
							estiver, a qualquer hora
						</p>
					</IntroTitle>

					<IntroItems>
						<InfoIcon
							backgroundColor="orange"
							icon={
								<ShoppingCart
									weight="fill"
									size={22}
								/>
							}
							text="Compra simples e segura"
						/>

						<InfoIcon
							backgroundColor="gray"
							icon={
								<Package
									weight="fill"
									size={22}
								/>
							}
							text="Embalagem mantém o café intacto"
						/>

						<InfoIcon
							backgroundColor="yellow"
							icon={
								<Timer
									weight="fill"
									size={22}
								/>
							}
							text="Entrega rápida e rastreada"
						/>

						<InfoIcon
							backgroundColor="purple"
							icon={
								<Coffee
									weight="fill"
									size={22}
								/>
							}
							text="O café chega fresquinho até você"
						/>
					</IntroItems>
				</IntroInfoContainer>

				<img
					alt="Copo de café com a logomarca e grãos de café ao fundo"
					src={CoffeeImage}
				/>
			</IntroContainer>
			<SectionCoffee>
				<h2>Nossos cafés: </h2>

				<CoffeeList>
					{coffees.map((coffee) => (
						<CoffeeCard
							key={coffee.id}
							coffee={coffee}
						/>
					))}
				</CoffeeList>
			</SectionCoffee>
		</HomeContainer>
	)
}
