import React from 'react'
import { Container } from './styles/shared.style'
import { Wrapper } from './styles/footer.style'

function footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <Wrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Wrapper>
      </Container>
    </footer>
  )
}

export default footer
