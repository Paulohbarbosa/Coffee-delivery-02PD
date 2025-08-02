import { LoadingContainer, Spinner } from './styles'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  message?: string
}

export function Loading({ size = 'medium', message }: LoadingProps) {
  return (
    <LoadingContainer>
      <Spinner size={size} />
      {message && <p>{message}</p>}
    </LoadingContainer>
  )
}
