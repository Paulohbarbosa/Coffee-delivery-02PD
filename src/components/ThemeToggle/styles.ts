import { styled } from 'styled-components'
import { media } from '../../styles/breakpoints'

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.mobile} {
    width: 2rem;
    height: 2rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`
