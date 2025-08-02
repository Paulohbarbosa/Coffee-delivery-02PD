import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonPaymentSection,
  SelectInputPayment,
  CheckoutContainer,
  FormSection,
  InformationPaymentSection,
  InputForm,
  PaymentSection,
  SectionBody,
  SectionHeader,
  ShoppingCartSection,
  SelectForm,
} from './styles'
import { Cart } from '../../components/Cart'
import { useContext, useMemo } from 'react'
import { ShoppingCartCoffeeContext } from '../../contexts/CoffeeContext'
import { OrderFinalizedProps } from '../../types'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatCEP, formatValue } from '../../utils/formatters'
import { APP_CONFIG } from '../../config/constants'
import {
  addressAndPaymentSchema,
  AddressAndPaymentFormData,
} from '../../utils/validations'

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddressAndPaymentFormData>({
    resolver: zodResolver(addressAndPaymentSchema),
  })

  const { shoppingCart, coffeeLists, orderCoffeeFinalized } = useContext(
    ShoppingCartCoffeeContext,
  )

  const navigate = useNavigate()

  /**
   * Calcula o valor total dos itens no carrinho
   */
  const totalItems = useMemo(() => {
    return shoppingCart.reduce((total, item) => {
      const coffee = coffeeLists.find((coffee) => coffee.id === item.id)
      if (coffee) {
        const price = parseFloat(coffee.value.replace(',', '.'))
        return total + price * item.amount
      }
      return total
    }, 0)
  }, [shoppingCart, coffeeLists])

  /**
   * Valor do frete configurado
   */
  const shippingValueTotal = APP_CONFIG.SHIPPING_PRICE

  function handleOrderFinalized(data: AddressAndPaymentFormData) {
    const orderFinalized: OrderFinalizedProps = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      complemento: data.complemento,
      formaPagamento: data.formaPagamento,
    }
    orderCoffeeFinalized(orderFinalized)
    reset()
    navigate('/success')
  }

  /**
   * Verifica se o formulário pode ser enviado
   */
  function isSubmitDisabled(): boolean {
    const requiredFields = [
      'formaPagamento',
      'rua',
      'numero',
      'bairro',
      'cidade',
      'cep',
      'uf',
    ]
    return (
      !requiredFields.every((field) =>
        watch(field as keyof AddressAndPaymentFormData),
      ) || shoppingCart.length === 0
    )
  }

  /**
   * Aplica máscara de CEP no input
   */
  function handleCEPMask(e: React.FormEvent<HTMLInputElement>) {
    const formatted = formatCEP(e.currentTarget.value)
    e.currentTarget.value = formatted
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleOrderFinalized)}>
      <div>
        <h1>Complete seu pedido</h1>
        <SectionBody>
          <SectionHeader variant={'yellow-dark'}>
            <i>
              <MapPinLine size={22} />
            </i>
            <p>
              <label>Endereço de Entrega</label>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </SectionHeader>
          <FormSection>
            <InputForm
              type="text"
              placeholder="CEP"
              variant="12.5rem"
              maxLength={9}
              onKeyUp={handleCEPMask}
              {...register('cep')}
            />
            <ErrorMessage errors={errors} name="cep" />
            <InputForm
              type="text"
              placeholder="Rua"
              variant="100%"
              {...register('rua')}
            />
            <ErrorMessage errors={errors} name="rua" />
            <div>
              <InputForm
                type="text"
                placeholder="Número"
                maxLength={5}
                variant="6rem"
                {...register('numero')}
              />
              <ErrorMessage errors={errors} name="numero" />
              <div>
                <InputForm
                  type="text"
                  placeholder="Complemento"
                  variant="100%"
                  {...register('complemento')}
                />
                <ErrorMessage errors={errors} name="complemento" />
                <p>Opcional</p>
              </div>
            </div>
            <div>
              <InputForm
                type="text"
                placeholder="Bairro"
                variant="12.5rem"
                {...register('bairro')}
              />
              <ErrorMessage errors={errors} name="bairro" />
              <InputForm
                type="text"
                placeholder="Cidade"
                variant="100%"
                {...register('cidade')}
              />
              <ErrorMessage errors={errors} name="cidade" />
              <SelectForm variant="12.5rem" {...register('uf')}>
                <option defaultChecked>UF</option>
                <option value={'AC'}>AC</option>
                <option value={'BA'}>BA</option>
                <option value={'MG'}>MG</option>
                <option value={'SP'}>SP</option>
              </SelectForm>
              <ErrorMessage errors={errors} name="uf" />
            </div>
          </FormSection>
        </SectionBody>
        <SectionBody>
          <SectionHeader variant={'purple'}>
            <i>
              <CurrencyDollar size={22} />
            </i>
            <p>
              <label>Pagamento</label>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </SectionHeader>
          <PaymentSection>
            <SelectInputPayment>
              <input
                type="radio"
                value="Cartão de Crédito"
                {...register('formaPagamento')}
              />
              <CreditCard size={16} />
              <span>cartão de crédito </span>
            </SelectInputPayment>
            <SelectInputPayment>
              <input
                type="radio"
                value="Cartão de Débito"
                {...register('formaPagamento')}
              />
              <Bank size={16} />
              <span>cartão de débito</span>
            </SelectInputPayment>
            <SelectInputPayment>
              <input
                type="radio"
                value="Dinheiro"
                {...register('formaPagamento')}
              />
              <Money size={16} />
              <span>Dinheiro </span>
            </SelectInputPayment>
          </PaymentSection>
        </SectionBody>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ShoppingCartSection>
          {shoppingCart.map((cart) => {
            const order = coffeeLists.find((coffee) => {
              return coffee.id === cart.id
            })
            return (
              <Cart
                key={cart.id}
                id={cart.id}
                img={order?.img}
                name={order?.name}
                value={order?.value}
                amountValue={cart.amount}
              />
            )
          })}
          <InformationPaymentSection>
            <p>
              <label>Total de itens</label>{' '}
              <span>R$ {formatValue(totalItems.toFixed(2))}</span>
            </p>
            <p>
              <label>Entrega</label>
              <span>R$ {formatValue(shippingValueTotal.toFixed(2))}</span>
            </p>
            <p>
              <strong>Total</strong>{' '}
              <strong>
                R$ {formatValue((totalItems + shippingValueTotal).toFixed(2))}
              </strong>
            </p>
          </InformationPaymentSection>
          <ButtonPaymentSection type="submit" disabled={isSubmitDisabled()}>
            Confirmar Pedido
          </ButtonPaymentSection>
        </ShoppingCartSection>
      </div>
    </CheckoutContainer>
  )
}
