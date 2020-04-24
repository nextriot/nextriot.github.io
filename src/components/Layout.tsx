import React from 'react'

import Header from './header'
import Footer from './footer'
import SEO from './seo'

import { Container } from './styles/shared.style'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
