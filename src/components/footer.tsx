import React from 'react'
import { Container, Wrapper } from './styles/layout.style'
import { Footer as SiteFooter } from './styles/footer.style'

const Footer = () => {
  return (
    <SiteFooter style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Wrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Wrapper>
      </Container>
    </SiteFooter>
  )
}

export default Footer
