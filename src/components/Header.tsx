import React from 'react'
import { Link } from 'gatsby'

import { Container } from './styles/shared.style'
import { Wrapper, Section } from './styles/header.style'

import { useSiteQuery } from '@/hooks/useSiteQuery'
import Navigation from './navigation'

const Header = () => {
  const { title } = useSiteQuery()
  return (
    <header>
      <Container>
        <Wrapper>
          <Section>
            <Link to="/">{title}</Link>
          </Section>
          <Section>
            <Navigation />
          </Section>
        </Wrapper>
      </Container>
    </header>
  )
}

export default Header
