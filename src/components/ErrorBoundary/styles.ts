import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;

  h2 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 2rem;
  max-width: 400px;
  line-height: 1.6;
`

export const RetryButton = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
    outline-offset: 2px;
  }
`
