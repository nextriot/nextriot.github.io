// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { wrapRootElement as wrap } from './wrap-root-element'

import React from 'react'

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  })
}

export const wrapRootElement = wrap
