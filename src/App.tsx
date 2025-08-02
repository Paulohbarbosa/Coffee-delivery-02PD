import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { lightTheme } from './styles/themes/defaultTheme'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { ErrorBoundary } from './components/ErrorBoundary'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <ErrorBoundary>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </ErrorBoundary>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
