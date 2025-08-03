import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  padding: 2rem 10rem;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.background};

  z-index: 1;

  position: fixed;
  margin-top: 0px !important;
  nav {
    display: flex;
    gap: 0.5rem;
  }
`

interface ButtonLocationProps {
  $hasLocationData?: boolean
  $isLoading?: boolean
  $hasError?: boolean
}

export const ButtonLocation = styled.button<ButtonLocationProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;

  font-family: 'Roboto' sans-serif;
  font-size: 0.875rem;
  line-height: 130%;

  cursor: ${(props) =>
    props.disabled
      ? 'not-allowed'
      : props.$hasLocationData
      ? 'default'
      : 'pointer'};

  border: 0;
  border-radius: 6px;

  transition: all 0.2s ease-in-out;

  /* Estados visuais baseados no status da geolocalização */
  color: ${(props) => {
    if (props.$hasError)
      return props.theme['red-dark'] || props.theme['base-subtitle']
    if (props.$hasLocationData)
      return props.theme['green-dark'] || props.theme['base-subtitle']
    return props.theme['base-subtitle']
  }};

  background: ${(props) => {
    if (props.$hasError)
      return props.theme['red-light'] || props.theme['purple-light']
    if (props.$hasLocationData)
      return props.theme['green-light'] || props.theme['purple-light']
    return props.theme['purple-light']
  }};

  /* Efeito hover apenas quando clicável */
  &:hover:not(:disabled) {
    ${(props) =>
      !props.$hasLocationData &&
      `
      background: ${props.theme.purple};
      color: ${props.theme.white};
    `}
  }

  /* Estado desabilitado */
  &:disabled {
    opacity: 0.6;
  }

  /* Animação de loading para o spinner */
  .spinning {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 0.375rem;
    font-size: 0.75rem;
    gap: 0.125rem;

    /* Em mobile, esconde o texto quando carregando para economizar espaço */
    ${(props) =>
      props.$isLoading &&
      `
      span:not(.spinning) {
        display: none;
      }
    `}
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;

  p {
    content: '';
    background-color: ${(props) => props.theme['yellow-dark']};

    font-size: 0.75rem;
    font-family: 'Roboto';
    font-weight: 700;
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    position: absolute;

    top: -8px;
    right: -8px;

    border-radius: 50%;
  }
`
export const ButtonShoppingCart = styled.button`
  width: 38px;
  height: 38px;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  :hover {
    color: ${(props) => props.theme.yellow};
  }
`
