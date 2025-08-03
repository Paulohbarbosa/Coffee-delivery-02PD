import { Moon, Sun } from 'phosphor-react'
import { useTheme } from '../../contexts/ThemeContext'
import { ThemeToggleButton } from './styles'

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <ThemeToggleButton
      onClick={toggleTheme}
      title={
        isDarkMode ? 'Alternar para tema claro' : 'Alternar para tema escuro'
      }
    >
      {isDarkMode ? (
        <Sun size={20} weight="fill" />
      ) : (
        <Moon size={20} weight="fill" />
      )}
    </ThemeToggleButton>
  )
}
