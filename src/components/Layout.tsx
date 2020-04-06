import React, { ReactNode } from 'react'

import { rhythm } from '@/utils/typography'

import { Container } from './styles/Layout.style'
import Header from './Header'

interface Props {
  location: {
    pathname: string
  }
  title: string
  children: ReactNode
}

const Layout = ({ location, title, children }: Props) => (
  <Container>
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header pathname={location.pathname} title={title}></Header>
      {children}
    </div>
  </Container>
)

export default Layout
