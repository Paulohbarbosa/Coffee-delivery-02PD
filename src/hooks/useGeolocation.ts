import { useState, useEffect, useCallback } from 'react'

/**
 * Interface para dados de localização
 */
interface LocationData {
  city: string
  state: string
  stateCode: string
}

/**
 * Interface para o estado do hook
 */
interface GeolocationState {
  location: LocationData | null
  isLoading: boolean
  error: string | null
  hasPermission: boolean | null
}

/**
 * Hook customizado para gerenciar geolocalização
 * Responsabilidades:
 * - Solicitar permissão de localização
 * - Obter coordenadas do usuário
 * - Converter coordenadas em endereço legível
 * - Gerenciar estados de carregamento e erro
 * - Persistir localização no localStorage
 */
export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    location: null,
    isLoading: false,
    error: null,
    hasPermission: null,
  })

  /**
   * Converte coordenadas em endereço usando API do ViaCEP
   * Usamos reverse geocoding através de uma API brasileira gratuita
   */
  const reverseGeocode = useCallback(
    async (lat: number, lng: number): Promise<LocationData> => {
      try {
        // Usando a API do OpenStreetMap Nominatim (gratuita)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=pt-BR`,
        )

        if (!response.ok) {
          throw new Error('Erro ao buscar endereço')
        }

        const data = await response.json()

        // Extraindo cidade e estado dos dados retornados
        const city =
          data.address?.city ||
          data.address?.town ||
          data.address?.village ||
          data.address?.municipality ||
          'Cidade não encontrada'

        const state = data.address?.state || 'Estado não encontrado'

        // Mapeamento de estados brasileiros para siglas
        const stateCodeMap: { [key: string]: string } = {
          Acre: 'AC',
          Alagoas: 'AL',
          Amapá: 'AP',
          Amazonas: 'AM',
          Bahia: 'BA',
          Ceará: 'CE',
          'Distrito Federal': 'DF',
          'Espírito Santo': 'ES',
          Goiás: 'GO',
          Maranhão: 'MA',
          'Mato Grosso': 'MT',
          'Mato Grosso do Sul': 'MS',
          'Minas Gerais': 'MG',
          Pará: 'PA',
          Paraíba: 'PB',
          Paraná: 'PR',
          Pernambuco: 'PE',
          Piauí: 'PI',
          'Rio de Janeiro': 'RJ',
          'Rio Grande do Norte': 'RN',
          'Rio Grande do Sul': 'RS',
          Rondônia: 'RO',
          Roraima: 'RR',
          'Santa Catarina': 'SC',
          'São Paulo': 'SP',
          Sergipe: 'SE',
          Tocantins: 'TO',
        }

        const stateCode =
          stateCodeMap[state] || state.substring(0, 2).toUpperCase()

        return {
          city,
          state,
          stateCode,
        }
      } catch (error) {
        console.error('Erro no reverse geocoding:', error)
        throw new Error('Não foi possível obter o endereço')
      }
    },
    [],
  )

  /**
   * Solicita a localização do usuário
   */
  const requestLocation = useCallback(async () => {
    // Verifica se a API de geolocalização está disponível
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: 'Geolocalização não é suportada neste navegador',
        hasPermission: false,
      }))
      return
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      // Solicita a posição atual do usuário
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000, // 10 segundos
            maximumAge: 300000, // 5 minutos de cache
          })
        },
      )

      const { latitude, longitude } = position.coords

      // Converte coordenadas em endereço
      const locationData = await reverseGeocode(latitude, longitude)

      // Salva no localStorage para uso futuro
      localStorage.setItem(
        '@coffee-delivery:location',
        JSON.stringify(locationData),
      )

      setState((prev) => ({
        ...prev,
        location: locationData,
        isLoading: false,
        hasPermission: true,
        error: null,
      }))
    } catch (error) {
      let errorMessage = 'Erro ao obter localização'

      if (error instanceof GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Permissão de localização negada'
            setState((prev) => ({ ...prev, hasPermission: false }))
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Localização indisponível'
            break
          case error.TIMEOUT:
            errorMessage = 'Tempo limite para obter localização'
            break
        }
      }

      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
      }))
    }
  }, [reverseGeocode])

  /**
   * Limpa os dados de localização
   */
  const clearLocation = useCallback(() => {
    localStorage.removeItem('@coffee-delivery:location')
    setState({
      location: null,
      isLoading: false,
      error: null,
      hasPermission: null,
    })
  }, [])

  /**
   * Carrega localização salva no localStorage na inicialização
   */
  useEffect(() => {
    const savedLocation = localStorage.getItem('@coffee-delivery:location')
    if (savedLocation) {
      try {
        const locationData = JSON.parse(savedLocation) as LocationData
        setState((prev) => ({
          ...prev,
          location: locationData,
          hasPermission: true,
        }))
      } catch (error) {
        console.error('Erro ao carregar localização salva:', error)
        localStorage.removeItem('@coffee-delivery:location')
      }
    }
  }, [])

  return {
    // Estados
    location: state.location,
    isLoading: state.isLoading,
    error: state.error,
    hasPermission: state.hasPermission,

    // Ações
    requestLocation,
    clearLocation,

    // Utilitários
    hasLocationData: !!state.location,
    locationText: state.location
      ? `${state.location.city}, ${state.location.stateCode}`
      : 'Porto Alegre, RS', // fallback padrão
  }
}
