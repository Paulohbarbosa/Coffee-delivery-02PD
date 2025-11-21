import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/themes/defaultTheme'

// Definimos os tipos para o contexto
type Theme = 'light' | 'dark'

interface ThemeContextData {
  theme: Theme
  toggleTheme: () => void
  isDarkMode: boolean
}

interface ThemeContextProviderProps {
  children: ReactNode
}

// Criamos o contexto
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // Estado do tema atual - inicia verificando localStorage ou preferência do sistema
  const [theme, setTheme] = useState<Theme>(() => {
    // Primeiro verifica se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('@coffee-delivery:theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    // Se não há preferência salva, verifica a preferência do sistema
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }

    // Padrão é light
    return 'light'
  })

  // Função para alternar entre temas
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Salva a preferência no localStorage sempre que o tema muda
  useEffect(() => {
    localStorage.setItem('@coffee-delivery:theme', theme)
  }, [theme])

  // Escuta mudanças na preferência do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function handleChange(e: MediaQueryListEvent) {
      // Só muda automaticamente se não há preferência salva
      const savedTheme = localStorage.getItem('@coffee-delivery:theme')
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Seleciona o tema baseado no estado atual
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDarkMode: theme === 'dark',
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

// Hook personalizado para usar o contexto de tema
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeContextProvider')
  }

  return context
}
