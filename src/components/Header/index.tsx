import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import CoffeeLogo from '../../assets/CoffeeLogo.svg'
import {
	HeaderContainer,
	NavContainer,
	CityAndCartContainer,
	Location
} from './style'

export function Header() {
	return (
		<HeaderContainer>
			<NavContainer>
				<NavLink to="/">
					<img
						src={CoffeeLogo}
						alt="Copo Roxo de café com um foguete"
					/>
				</NavLink>
				<CityAndCartContainer>
					<Location>
						<MapPin
							size={22}
							weight="fill"
						/>
						<span>Joinville, SC</span>
					</Location>
					<NavLink to="/checkout">
						<ShoppingCart
							size={22}
							weight="fill"
						/>
					</NavLink>
				</CityAndCartContainer>
			</NavContainer>
		</HeaderContainer>
	)
}
