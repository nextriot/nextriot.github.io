import Typography, { TypographyOptions } from 'typography'
import Theme from './theme'

const mainFonts = [
  'AGaramondPro',
  'Adobe Garamond Pro',
  'Cormorant Garamond',
  'Garamond',
  'Georgia',
  'serif',
]

const googleFonts = [
  {
    name: 'Cormorant Garamond',
    styles: ['400', '700', 'italic'],
  },
  {
    name: 'Oranienbaum',
    styles: ['400'],
  },
  {
    name: 'Roboto',
    styles: ['300', '400', '600'],
  },
]

const options: TypographyOptions = {
  baseFontSize: '20px',
  baseLineHeight: 1.4,
  scaleRatio: 5 / 2,
  includeNormalize: false,
  googleFonts,
  headerWeight: 400,
  bodyWeight: 400,
  headerFontFamily: mainFonts,
  bodyFontFamily: mainFonts,
  overrideThemeStyles: Theme,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
