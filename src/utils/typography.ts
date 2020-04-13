import Typography from 'typography'
import Github from 'typography-theme-github'

const fonts = [
  'AGaramondPro',
  'Adobe Garamond Pro',
  'Cormorant Garamond',
  'Garamond',
  'Georgia',
  'serif',
]

Github.baseFontSize = '16px'
Github.headerFontFamily = fonts
Github.bodyFontFamily = fonts
Github.googleFonts = [
  {
    name: 'Cormorant Garamond',
    styles: ['400'],
  },
]

Github.overrideThemeStyles = ({ rhythm }) => {
  return {
    a: { color: 'red' },
    'a.gatsby-resp-image-link': { boxShadow: `none` },
    p: { marginBottom: rhythm(2 / 1.6) },
    h1: { fontSize: '44px', fontWeight: 400 },
  }
}

const typography = new Typography({ ...Github, includeNormalize: false })

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
