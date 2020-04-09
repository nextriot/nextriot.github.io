import React, { ReactNode } from 'react'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from './Toggle/Toggle'

import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

import {
  Header as HeaderWrapper,
  Header1,
  Header3,
  Link,
} from './styles/Layout.style'

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

const getTheme = (theme: unknown) => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('theme')
  } else if (typeof window !== 'undefined') {
    return window.__theme
  } else {
    return theme || 'light'
  }
}

const renderThemeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => {
      // FIX: bug in theme toggler
      // `theme` is set to null on re-render
      // let t = theme || (typeof window !== 'undefined' ? window.__theme : null)
      // if (!t && typeof localStorage !== 'undefined') {
      //   t = localStorage.getItem('theme')
      // }
      const t = getTheme(theme)
      return (
        <Toggle
          icons={{
            checked: renderIcon(sun),
            unchecked: renderIcon(moon),
          }}
          checked={t === 'dark'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            toggleTheme(e.target.checked ? 'dark' : 'light')
          }
        />
      )
    }}
  </ThemeToggler>
)

interface Props {
  title: string
  pathname: string
}

const Header = ({ title, pathname }: Props) => {
  return (
    <HeaderWrapper>
      {renderHeader(pathname === ROOT_PATH, title)}
      {/* {renderThemeToggle()} */}
    </HeaderWrapper>
  )
}

Header.whyDidYouRender = true

export default Header
