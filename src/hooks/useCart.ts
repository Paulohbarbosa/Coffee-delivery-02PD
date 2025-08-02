import { useContext } from 'react'
import { ShoppingCartCoffeeContext } from '../contexts/CoffeeContext'

/**
 * Hook customizado para gerenciar operações do carrinho
 * Centraliza a lógica e facilita o uso em componentes
 */
export function useCart() {
  const context = useContext(ShoppingCartCoffeeContext)

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CoffeeContextProvider')
  }

  const {
    shoppingCart,
    coffeeLists,
    newOrderCoffee,
    changeOrderAmount,
    deleteOrderCoffee,
    orderCoffeeFinalized,
    orderFinalized,
  } = context

  /**
   * Calcula o total de itens no carrinho
   */
  const totalItemsInCart = shoppingCart.reduce(
    (total, item) => total + item.amount,
    0,
  )

  /**
   * Calcula o valor total do carrinho
   */
  const cartTotal = shoppingCart.reduce((total, item) => {
    const coffee = coffeeLists.find((coffee) => coffee.id === item.id)
    if (coffee) {
      const price = parseFloat(coffee.value.replace(',', '.'))
      return total + price * item.amount
    }
    return total
  }, 0)

  /**
   * Verifica se o carrinho está vazio
   */
  const isCartEmpty = shoppingCart.length === 0

  /**
   * Busca informações de um café pelo ID
   */
  const getCoffeeById = (id: number) => {
    return coffeeLists.find((coffee) => coffee.id === id)
  }

  /**
   * Verifica se um item específico está no carrinho
   */
  const isItemInCart = (id: number) => {
    return shoppingCart.some((item) => item.id === id)
  }

  /**
   * Obtém a quantidade de um item específico no carrinho
   */
  const getItemQuantity = (id: number) => {
    const item = shoppingCart.find((item) => item.id === id)
    return item?.amount || 0
  }

  return {
    // Estados
    shoppingCart,
    coffeeLists,
    orderFinalized,

    // Ações
    newOrderCoffee,
    changeOrderAmount,
    deleteOrderCoffee,
    orderCoffeeFinalized,

    // Utilitários
    totalItemsInCart,
    cartTotal,
    isCartEmpty,
    getCoffeeById,
    isItemInCart,
    getItemQuantity,
  }
}
