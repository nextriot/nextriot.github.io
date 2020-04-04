import React, { ReactNode } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Toggle from './Toggle/Toggle'
import {
  Container,
  Wrapper,
  Header,
  Header1,
  Header3,
  Link,
} from './styles/Layout.style'

import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const ROOT_PATH = `${__PATH_PREFIX__}/`

const renderHeader = (isRootPath: boolean, title: string) => {
  const largeHeader = (child: ReactNode) => <Header1>{child}</Header1>
  const mediumHeader = (child: ReactNode) => <Header3>{child}</Header3>
  const link = <Link to={`/`}>{title}</Link>
  return isRootPath ? largeHeader(link) : mediumHeader(link)
}

const renderIcon = (icon: string) => (
  <img
    src={icon}
    width="16"
    height="16"
    role="presentation"
    style={{ pointerEvents: 'none' }}
  />
)

interface Props {
  location: {
    pathname: string
  }
  title: string
  children: ReactNode
}

const Layout = ({ location, title, children }: Props) => (
  <Container>
    <Wrapper>
      <Header>
        {renderHeader(location.pathname === ROOT_PATH, title)}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Toggle
              icons={{
                checked: renderIcon(sun),
                unchecked: renderIcon(moon),
              }}
              checked={theme === 'dark'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                toggleTheme(e.target.checked ? 'dark' : 'light')
              }
            />
          )}
        </ThemeToggler>
      </Header>
      {children}
    </Wrapper>
  </Container>
)

export default Layout
