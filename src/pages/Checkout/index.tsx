import { MapPinLine } from 'phosphor-react'

import { Input } from '../../components/Input'
import {
	AddressAndPayment,
	CheckoutContainer,
	FormContainer,
	FormHeader,
	PaymentOptions,
	Form,
	Title,
	ConfirmOrder
} from './styles'

export function Checkout() {
	return (
		<CheckoutContainer>
			<AddressAndPayment>
				<Title>Complete seu pedido</Title>
				<FormContainer>
					<FormHeader>
						<span>
							<MapPinLine />
						</span>
						<div>
							<h4>Endereço de Entrega</h4>
							<p>
								Informe o endereço onde deseja receber seu
								pedido
							</p>
						</div>
					</FormHeader>

					<Form>
						<Input
							placeholder="CEP"
							type="number"
							className="cep"
						/>
						<Input
							placeholder="Rua"
							type="string"
						/>
						<Input
							placeholder="Número"
							type="number"
						/>
						<Input
							placeholder="Complemento"
							type="string"
						/>
						<Input
							placeholder="Bairro"
							type="string"
						/>
						<Input
							placeholder="Cidade"
							type="string"
						/>
						<Input
							placeholder="UF"
							type="string"
						/>
					</Form>
				</FormContainer>
				<PaymentOptions>
					<span>cartão de crédito</span>
					<span>cartão de débito</span>
					<span>Dinheiro</span>
				</PaymentOptions>
			</AddressAndPayment>

			<ConfirmOrder>
				<h3>Cafés selecionados</h3>
			</ConfirmOrder>
		</CheckoutContainer>
	)
}
