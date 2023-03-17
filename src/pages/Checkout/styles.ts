import styled from 'styled-components'

export const CheckoutContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const AddressForm= styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
export const PaymentOptions= styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  label {
    font-size: 16px;
    margin-right: 10px;
  }
`