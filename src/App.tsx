import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { ErrorBoundary } from './components/ErrorBoundary'

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </ErrorBoundary>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeContextProvider>
  )
}
