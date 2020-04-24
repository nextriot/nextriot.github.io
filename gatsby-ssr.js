import React from 'react'
import { wrapRootElement as wrap } from './wrap-root-element'
import CSSReset from '!css-loader!tailwindcss/dist/base.css'

// Inject CSS reset before typography plugin in production
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  if (process.env.BUILD_STAGE === 'build-html') {
    replaceHeadComponents(
      [
        <style
          key="custom-styles"
          id="css-reset-ssr"
          dangerouslySetInnerHTML={{
            __html: CSSReset,
          }}
        />,
      ].concat(getHeadComponents())
    )
  }
}

export const wrapRootElement = wrap
