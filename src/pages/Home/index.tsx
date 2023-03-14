import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImage from '../../assets/CoffeeDelivery.png'
import { CoffeeCard } from '../../components/CoffeeCard'
import { InfoIcon } from '../../components/InfoIcon'

import {
	IntroContainer,
	IntroInfoContainer,
	IntroTitle,
	IntroItems,
	ImageBackground,
	DivContainer,
	CoffeeList,
	SectionCoffee
} from './styles'

// Coffees
import ExpressoTradicional from '../../assets/Coffees/expresso-tradicional.svg'
import ExpressoAmericano from '../../assets/Coffees/expresso-americano.svg'
import ExpressoCremoso from '../../assets/Coffees/expresso-cremoso.svg'
import ExpressoGelado from '../../assets/Coffees/expresso-gelado.svg'
import CafeComLeite from '../../assets/Coffees/cafe-com-leite.svg'
import Latte from '../../assets/Coffees/latte.svg'
import Capuccino from '../../assets/Coffees/capuccino.svg'
import Macchiato from '../../assets/Coffees/macchiato.svg'
import Mocaccino from '../../assets/Coffees/mocaccino.svg'
import ChocolateQuente from '../../assets/Coffees/chocolate-quente.svg'
import Cubano from '../../assets/Coffees/cubano.svg'
import Havaiano from '../../assets/Coffees/havaiano.svg'
import Arabe from '../../assets/Coffees/arabe.svg'
import Irlandes from '../../assets/Coffees/irlandes.svg'

export function Home() {
	return (
		<DivContainer>
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
								/>}
							text="Compra simples e segura"
						/>

						<InfoIcon
							backgroundColor="gray"
							icon={
								<Package
									weight="fill"
									size={22}
								/>}
							text="Embalagem mantém o café intacto"
						/>

						<InfoIcon
							backgroundColor="yellow"
							icon={
								<Timer
									weight="fill"
									size={22}
								/>}
							text="Entrega rápida e rastreada"
						/>

						<InfoIcon
							backgroundColor="purple"
							icon={
								<Coffee
									weight="fill"
									size={22} 
								/>}
							text="O café chega fresquinho até você"
						/>
					</IntroItems>
				</IntroInfoContainer>

				<img
					alt="Copo de café com a logomarca e grãos ao fundo"
					src={CoffeeImage}
				/>
			</IntroContainer>
			<SectionCoffee>
				<h2>Nossos cafés: </h2>

				<CoffeeList>
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
				</CoffeeList>
			</SectionCoffee>

			{/* <div>
				<img
					alt=""
					src={ExpressoTradicional}
				/>

				<img
					alt=""
					src={ExpressoAmericano}
				/>
				<img
					alt=""
					src={ExpressoCremoso}
				/>
				<img
					alt=""
					src={ExpressoGelado}
				/>
				<img
					alt=""
					src={CafeComLeite}
				/>
				<img
					alt=""
					src={Latte}
				/>
				<img
					alt=""
					src={Capuccino}
				/>
				<img
					alt=""
					src={Macchiato}
				/>
				<img
					alt=""
					src={Mocaccino}
				/>
				<img
					alt=""
					src={ChocolateQuente}
				/>
				<img
					alt=""
					src={Cubano}
				/>
				<img
					alt=""
					src={Mocaccino}
				/>
				<img
					alt=""
					src={Havaiano}
				/>
				<img
					alt=""
					src={Arabe}
				/>
				<img
					alt=""
					src={Irlandes}
				/>
			</div> */}
		</DivContainer>
	)
}
