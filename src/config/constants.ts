/**
 * Constantes da aplicação
 * Centralizando valores que podem mudar ou serem configuráveis
 */

export const APP_CONFIG = {
  // Preços
  COFFEE_PRICE: 9.9,
  SHIPPING_PRICE: 3.5,

  // Limites
  MAX_ITEMS_PER_COFFEE: 9,
  MIN_ITEMS_PER_COFFEE: 1,

  // LocalStorage
  STORAGE_KEY: '@ignite-coffeeDelivery:Coffee-Order-1.0.0',

  // Formatação
  CURRENCY: 'BRL',
  LOCALE: 'pt-BR',
} as const

/**
 * Estados brasileiros para o select
 */
export const BRAZILIAN_STATES = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
] as const

/**
 * Formas de pagamento disponíveis
 */
export const PAYMENT_METHODS = [
  { value: 'Cartão de Crédito', label: 'Cartão de Crédito' },
  { value: 'Cartão de Débito', label: 'Cartão de Débito' },
  { value: 'Dinheiro', label: 'Dinheiro' },
] as const
