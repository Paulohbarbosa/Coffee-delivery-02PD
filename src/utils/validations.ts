import * as zod from 'zod'

/**
 * Validações reutilizáveis para formulários
 */

/**
 * Valida CEP brasileiro (formato: 00000-000)
 */
export const cepValidation = zod
  .string()
  .min(1, 'CEP é obrigatório')
  .regex(/^\d{5}-\d{3}$/, 'CEP deve estar no formato 00000-000')

/**
 * Valida UF brasileira
 */
export const ufValidation = zod
  .string()
  .min(2, 'UF é obrigatória')
  .max(2, 'UF deve ter 2 caracteres')
  .regex(/^[A-Z]{2}$/, 'UF deve conter apenas letras maiúsculas')

/**
 * Validação para campos de texto obrigatórios
 */
export const requiredStringValidation = (fieldName: string) =>
  zod.string().min(1, `${fieldName} é obrigatório`)

/**
 * Validação para número de endereço
 */
export const addressNumberValidation = zod
  .string()
  .min(1, 'Número é obrigatório')
  .regex(
    /^\d+[a-zA-Z]?$/,
    'Número deve conter apenas dígitos e opcionalmente uma letra',
  )

/**
 * Validação para complemento (opcional)
 */
export const complementValidation = zod.string().optional()

/**
 * Validação para forma de pagamento
 */
export const paymentMethodValidation = zod
  .string()
  .min(1, 'Forma de pagamento é obrigatória')
  .refine(
    (value) =>
      ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'].includes(value),
    'Forma de pagamento inválida',
  )

/**
 * Schema completo para endereço e pagamento
 */
export const addressAndPaymentSchema = zod.object({
  cep: cepValidation,
  rua: requiredStringValidation('Rua'),
  numero: addressNumberValidation,
  bairro: requiredStringValidation('Bairro'),
  cidade: requiredStringValidation('Cidade'),
  uf: ufValidation,
  complemento: complementValidation,
  formaPagamento: paymentMethodValidation,
})

export type AddressAndPaymentFormData = zod.infer<
  typeof addressAndPaymentSchema
>
