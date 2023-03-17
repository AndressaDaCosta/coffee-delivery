import { AddressForm, CheckoutContainer, PaymentOptions } from './styles'

export function Checkout() {
	return (
		<CheckoutContainer>
			<AddressForm>
				<input
					type="text"
					placeholder="CEP"
				/>
				<input
					type="text"
					placeholder="Rua"
				/>
				<input
					type="text"
					placeholder="Número"
				/>
				<input
					type="text"
					placeholder="Complemento"
				/>
				<input
					type="text"
					placeholder="Bairro"
				/>
				<input
					type="text"
					placeholder="Cidade"
				/>
				<input
					type="text"
					placeholder="UF"
				/>
			</AddressForm>
			<PaymentOptions>
				<label>
					<input
						type="button"
						name="opcao-pagamento"
					/>
					Cartão de Crédito
				</label>
				<label>
					<input
						type="radio"
						name="opcao-pagamento"
					/>
					Cartão de Débito
				</label>
				<label>
					<input
						type="radio"
						name="opcao-pagamento"
					/>
					Boleto Bancário
				</label>
			</PaymentOptions>
		</CheckoutContainer>
	)
}
