// Definição dos breakpoints para responsividade
export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  laptop: 1440,
  desktop: 1920,
}

// Helpers para media queries
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  laptop: `@media (max-width: ${breakpoints.laptop}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
}

// Valores de padding para containers responsivos
export const containerPadding = {
  desktop: '2rem',
  laptop: '1.5rem',
  tablet: '1.5rem',
  mobile: '1rem',
}
