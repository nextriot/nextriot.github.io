import React from 'react'
import { wrapRootElement as wrap } from './wrap-root-element'
import CSSReset from '!postcss-loader!./src/utils/base.min.css'

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents(
    [
      <style
        key="custom-styles"
        dangerouslySetInnerHTML={{
          __html: CSSReset,
        }}
      />,
    ].concat(getHeadComponents())
  )
}

export const wrapRootElement = wrap
