import {
  ButtonContainer,
  ButtonLocation,
  ButtonShoppingCart,
  HeaderContainer,
} from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { ThemeToggle } from '../ThemeToggle'

export function Header() {
  const { totalItemsInCart } = useCart()

  /**
   * Renderiza a quantidade de itens no carrinho
   */
  function cartButtonInformation() {
    if (totalItemsInCart > 0) {
      return (
        <span aria-label={`${totalItemsInCart} itens no carrinho`}>
          {totalItemsInCart}
        </span>
      )
    }
    return null
  }

  return (
    <>
      <HeaderContainer>
        <NavLink to="/" title="Inicio">
          <img
            src={logo}
            alt="Logo do site Coffee Delivery: Um copo de café com um desenho de foguete no meio"
          />
        </NavLink>
        <nav>
          <ButtonLocation>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </ButtonLocation>
          <ThemeToggle />
          <NavLink to="/checkout" title="Carrinho">
            <ButtonContainer>
              <ButtonShoppingCart>
                <ShoppingCart size={22} weight="fill" />
              </ButtonShoppingCart>
              {cartButtonInformation()}
            </ButtonContainer>
          </NavLink>
        </nav>
      </HeaderContainer>
      <br />
    </>
  )
}
