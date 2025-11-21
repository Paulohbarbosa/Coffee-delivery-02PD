/**
 * Tipos centralizados da aplicação
 */

export interface OrderCartProps {
  id: number
  amount: number
}

export interface CoffeeListsProps {
  id: number
  img: string
  tags: string[]
  name: string
  description: string
  value: string
}

export interface OrderFinalizedProps {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  complemento?: string
  formaPagamento: string
}

/**
 * Tipos para formulários
 */
export interface AddressFormData {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  complemento?: string
  formaPagamento: string
}

/**
 * Tipos para contexto
 */
export interface CoffeeContextType {
  shoppingCart: OrderCartProps[]
  coffeeLists: CoffeeListsProps[]
  orderFinalized: OrderFinalizedProps | null
  newOrderCoffee: (newOrder: OrderCartProps) => void
  changeOrderAmount: (id: number, amount: number) => void
  deleteOrderCoffee: (id: number) => void
  orderCoffeeFinalized: (order: OrderFinalizedProps) => void
}

/**
 * Tipos para componentes
 */
export interface CardProps {
  coffee: CoffeeListsProps
}

export interface CartItemProps {
  item: OrderCartProps
  coffee: CoffeeListsProps
}

/**
 * Tipos utilitários
 */
export type PaymentMethod =
  | 'Cartão de Crédito'
  | 'Cartão de Débito'
  | 'Dinheiro'

export type BrazilianState =
  | 'AC'
  | 'AL'
  | 'AP'
  | 'AM'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MT'
  | 'MS'
  | 'MG'
  | 'PA'
  | 'PB'
  | 'PR'
  | 'PE'
  | 'PI'
  | 'RJ'
  | 'RN'
  | 'RS'
  | 'RO'
  | 'RR'
  | 'SC'
  | 'SP'
  | 'SE'
  | 'TO'
