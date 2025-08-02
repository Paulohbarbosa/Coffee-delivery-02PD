import { Trash } from 'phosphor-react'
import {
  ButtonCart,
  CartButtonContainer,
  CartContainer,
  CartInfo,
  CartInfoContainer,
  CartTotal,
} from './styled'
import { Counter } from '../Counter'
import { useContext, useState } from 'react'
import { ShoppingCartCoffeeContext } from '../../contexts/CoffeeContext'

interface CartProps {
  id: number
  img: string | undefined
  name?: string
  amountValue: number
  value?: string
}

export function Cart({ id, img, name, amountValue, value }: CartProps) {
  const { deleteOrderCoffee, changeOrderAmount } = useContext(
    ShoppingCartCoffeeContext,
  )

  const [amount, setAmount] = useState(amountValue)

  function plus() {
    if (amount < 9) {
      changeOrderAmount(id, amount + 1)
      setAmount(amount + 1)
    }
  }
  function minus() {
    if (amount > 1) {
      changeOrderAmount(id, amount - 1)
      setAmount(amount - 1)
    }
  }

  function deleteCoffee() {
    deleteOrderCoffee(id)
  }

  return (
    <>
      <CartContainer>
        <CartInfoContainer>
          <img src={img} alt="" />
          <CartInfo>
            <h2>{name}</h2>
            <CartButtonContainer>
              <Counter
                value={amount}
                handleCounterMinus={minus}
                handleCounterPlus={plus}
              />
              <ButtonCart onClick={deleteCoffee}>
                <Trash size={16} />
                Remover
              </ButtonCart>
            </CartButtonContainer>
          </CartInfo>
        </CartInfoContainer>
        <CartTotal>
          <span>R$ {value}</span>
        </CartTotal>
      </CartContainer>
      <hr />
    </>
  )
}
