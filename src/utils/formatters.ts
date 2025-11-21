/**
 * Utilitários para formatação de dados
 */

/**
 * Formata um valor numérico para o formato brasileiro (R$ 0,00)
 * @param value - Valor a ser formatado
 * @returns String formatada
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

/**
 * Formata um valor para exibição com vírgula decimal
 * @param value - Valor a ser formatado
 * @returns String formatada
 */
export function formatValue(value: string | number): string {
  return value.toString().replace('.', ',')
}

/**
 * Aplica máscara de CEP (00000-000)
 * @param value - Valor do CEP
 * @returns CEP formatado
 */
export function formatCEP(value: string): string {
  // Remove tudo que não é dígito
  const cleanValue = value.replace(/\D/g, '')

  // Aplica a máscara
  if (cleanValue.length <= 5) {
    return cleanValue
  } else {
    return cleanValue.replace(/^(\d{5})(\d{1,3})/, '$1-$2')
  }
}

/**
 * Remove formatação do CEP para validação
 * @param cep - CEP formatado
 * @returns CEP apenas com números
 */
export function cleanCEP(cep: string): string {
  return cep.replace(/\D/g, '')
}
