import { styled } from 'styled-components'

export const CounterContainer = styled.div`
  width: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-label'] + '20'};

  user-select: none;

  label {
    width: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
`
export const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background-color: transparent;
  box-shadow: none;
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
