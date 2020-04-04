declare module 'gatsby-plugin-dark-mode' {
  import { ReactElement } from 'react'
  interface ThemeTogglerInnerProps {
    theme: string
    toggleTheme(theme: string): void
  }

  interface ThemeTogglerProps {
    children(options: ThemeTogglerInnerProps): ReactElement
  }

  export class ThemeToggler extends React.Component<ThemeTogglerProps> {}
}
