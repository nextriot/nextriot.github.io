import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Toggle from '../components/Toggle'
import { Wrapper, Header, Header1, Header3, Link } from './styles/Layout.style'

import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const ROOT_PATH = `${__PATH_PREFIX__}/`

const renderHeader = (isRootPath, title) => {
  const largeHeader = (child) => <Header1>{child}</Header1>
  const mediumHeader = (child) => <Header3>{child}</Header3>
  const link = <Link to={`/`}>{title}</Link>
  return isRootPath ? largeHeader(link) : mediumHeader(link)
}

const renderIcon = (icon) => (
  <img
    src={icon}
    width="16"
    height="16"
    role="presentation"
    style={{ pointerEvents: 'none' }}
  />
)

const Layout = ({ location, title, children }) => (
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
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
          />
        )}
      </ThemeToggler>
    </Header>
    {children}
  </Wrapper>
)

export default Layout
