import './src/lib/prism.css'
import './src/utils/global.css'

import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap

// Inject CSS reset before typography plugin in development
export const onClientEntry = () => {
  if (process.env.BUILD_STAGE === 'develop') {
    const head = document.head
    const typographyEl = document.getElementById('typography.js')

    const CSSReset = require('!css-loader!tailwindcss/dist/base.css')
    const styleNode = document.createElement('style')
    styleNode.id = 'css-reset'
    styleNode.innerHTML = CSSReset

    if (typographyEl) {
      head.insertBefore(styleNode, typographyEl)
    } else {
      if (head.firstChild) {
        head.insertBefore(styleNode, head.firstChild)
      } else {
        head.appendChild(styleNode)
      }
    }
  }
}
