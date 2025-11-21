import { ReactNode, createContext, useEffect, useState } from 'react'
import { coffeesData } from '../data/coffees'
import { APP_CONFIG } from '../config/constants'
import {
  OrderCartProps,
  OrderFinalizedProps,
  CoffeeContextType,
} from '../types'

export const ShoppingCartCoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

/**
 * Context Provider para gerenciar o estado do carrinho de compras
 * Responsabilidades:
 * - Gerenciar itens do carrinho
 * - Persistir dados no localStorage
 * - Controlar pedidos finalizados
 */
export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  // Usando dados importados em vez de hardcoded
  const coffeeLists = coffeesData
  const [orderFinalized, setOrderFinalized] =
    useState<OrderFinalizedProps | null>(null)

  const [shoppingCart, setShoppingCart] = useState<OrderCartProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem(APP_CONFIG.STORAGE_KEY)
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  })

  /**
   * Altera a quantidade de um item no carrinho
   * Garante que a quantidade fique entre os limites configurados
   */
  function changeOrderAmount(id: number, amount: number) {
    const clampedAmount = Math.max(
      APP_CONFIG.MIN_ITEMS_PER_COFFEE,
      Math.min(APP_CONFIG.MAX_ITEMS_PER_COFFEE, amount),
    )

    setShoppingCart((state) =>
      state.map((item) =>
        item.id === id ? { ...item, amount: clampedAmount } : item,
      ),
    )
  }

  /**
   * Persiste o carrinho no localStorage sempre que houver mudanças
   */
  useEffect(() => {
    localStorage.setItem(APP_CONFIG.STORAGE_KEY, JSON.stringify(shoppingCart))
  }, [shoppingCart])

  /**
   * Remove um item completamente do carrinho
   * @param id - ID do café a ser removido
   */
  function deleteOrderCoffee(id: number) {
    setShoppingCart((state) => state.filter((order) => order.id !== id))
  }

  /**
   * Adiciona um novo item ao carrinho ou incrementa a quantidade se já existir
   * @param newOrder - Novo pedido a ser adicionado
   */
  function newOrderCoffee(newOrder: OrderCartProps) {
    setShoppingCart((state) => {
      const existingItem = state.find((coffee) => coffee.id === newOrder.id)

      if (existingItem) {
        // Se o item já existe, atualiza a quantidade
        return state.map((coffee) =>
          coffee.id === newOrder.id
            ? {
                ...coffee,
                amount: Math.min(9, coffee.amount + newOrder.amount),
              }
            : coffee,
        )
      } else {
        // Se é um novo item, adiciona ao carrinho
        return [...state, newOrder]
      }
    })
  }

  function orderCoffeeFinalized(purchase: OrderFinalizedProps) {
    setOrderFinalized(purchase)
    setShoppingCart([])
  }

  return (
    <ShoppingCartCoffeeContext.Provider
      value={{
        newOrderCoffee,
        changeOrderAmount,
        coffeeLists,
        shoppingCart,
        deleteOrderCoffee,
        orderCoffeeFinalized,
        orderFinalized,
      }}
    >
      {children}
    </ShoppingCartCoffeeContext.Provider>
  )
}
