import {
  ButtonContainer,
  ButtonLocation,
  ButtonShoppingCart,
  HeaderContainer,
} from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart, Spinner } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useGeolocation } from '../../hooks/useGeolocation'
import { ThemeToggle } from '../ThemeToggle'

export function Header() {
  const { totalItemsInCart } = useCart()
  const {
    locationText,
    isLoading,
    error,
    hasPermission,
    requestLocation,
    hasLocationData,
  } = useGeolocation()

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

  /**
   * Manipula o clique no botão de localização
   * Se não há dados de localização, solicita permissão
   */
  function handleLocationClick() {
    if (!hasLocationData && hasPermission !== false) {
      requestLocation()
    }
  }

  /**
   * Renderiza o ícone apropriado para o estado da localização
   */
  function renderLocationIcon() {
    if (isLoading) {
      return <Spinner size={22} weight="bold" className="spinning" />
    }
    return <MapPin size={22} weight="fill" />
  }

  /**
   * Determina o título do botão baseado no estado
   */
  function getLocationButtonTitle() {
    if (hasLocationData) {
      return 'Localização atual'
    }
    if (hasPermission === false) {
      return 'Permissão de localização negada'
    }
    if (error) {
      return `Erro: ${error}`
    }
    return 'Clique para detectar sua localização'
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
          <ButtonLocation
            onClick={handleLocationClick}
            title={getLocationButtonTitle()}
            disabled={isLoading || hasPermission === false}
            $hasLocationData={hasLocationData}
            $isLoading={isLoading}
            $hasError={!!error}
          >
            {renderLocationIcon()}
            {locationText}
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
