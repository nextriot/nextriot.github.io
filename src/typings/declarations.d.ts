declare module 'typography-theme-github' {
  import { TypographyOptions } from 'typography'
  const Github: TypographyOptions = {}
  export default Github
}

declare module '@mdx-js/react' {
  import { ComponentType, StyleHTMLAttributes } from 'react'

  type MDXProps = {
    children: React.ReactNode
    components: React.ReactNode
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}

declare module 'mdx-utils' {
  export const preToCodeBlock = (preProps: object) => {
    return undefined
  }
}
