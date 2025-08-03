import { createGlobalStyle } from 'styled-components'
import { media } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
    }

    html {
        font-size: 16px;
        
        ${media.laptop} {
            font-size: 15px;
        }
        
        ${media.tablet} {
            font-size: 14px;
        }
        
        ${media.mobile} {
            font-size: 13px;
        }
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        overflow-x: hidden;
        min-width: 320px;
        
        /* Transição suave para mudança de tema */
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        
        /* Melhora a renderização de fontes */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
        
        /* Transição suave para botões */
        transition: all 0.2s ease-in-out;
    }

    /* Utilitários responsivos */
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        
        ${media.tablet} {
            padding: 0 1.5rem;
        }
        
        ${media.mobile} {
            padding: 0 1rem;
        }
    }

    .hide-mobile {
        ${media.mobile} {
            display: none !important;
        }
    }

    .hide-tablet {
        ${media.tablet} {
            display: none !important;
        }
    }

    .show-mobile {
        display: none;
        
        ${media.mobile} {
            display: block !important;
        }
    }

    /* Melhora a acessibilidade para usuários que preferem movimento reduzido */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    /* Scrollbar personalizada para tema dark */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme['base-card']};
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme['base-button']};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme['base-hover']};
    }
`
