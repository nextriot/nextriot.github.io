import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from '@/components'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: (props: { className: string }) => {
    const { className } = props
    const isLive = className.includes('react-live')
    return isLive ? <div {...props} /> : <pre {...props} />
  },
  code: Code,
}

export const wrapRootElement = ({ element }: { element: unknown }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
