import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from '@/components'

interface MDXProps {
  className: string
  children: string
}

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: (props: MDXProps) => {
    const { className } = props
    const isLive = className.includes('react-live')
    return isLive ? <div {...props} /> : <pre {...props} />
  },
  code: Code,
  blockquote: (props: MDXProps) => {
    console.log(props)
    return <blockquote>{props.children}</blockquote>
  },
}

export const wrapRootElement = ({ element }: { element: unknown }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
