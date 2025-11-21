import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorContainer, ErrorMessage, RetryButton } from './styles'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h2>Oops! Algo deu errado</h2>
          <ErrorMessage>
            Ocorreu um erro inesperado. Por favor, tente novamente.
          </ErrorMessage>
          {import.meta.env.DEV && this.state.error && (
            <details style={{ marginTop: '1rem' }}>
              <summary>Detalhes do erro (desenvolvimento)</summary>
              <pre>{this.state.error.stack}</pre>
            </details>
          )}
          <RetryButton onClick={this.handleRetry}>Tentar novamente</RetryButton>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}
