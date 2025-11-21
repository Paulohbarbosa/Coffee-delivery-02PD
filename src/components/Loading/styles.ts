import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

interface SpinnerProps {
  size: 'small' | 'medium' | 'large'
}

const sizeMap = {
  small: '1rem',
  medium: '2rem',
  large: '3rem',
}

export const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => sizeMap[props.size]};
  height: ${(props) => sizeMap[props.size]};
  border: 2px solid ${(props) => props.theme['base-button']};
  border-top: 2px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
