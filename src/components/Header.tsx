import React from 'react'
import { Link } from 'gatsby'

import {
  Wrapper,
  Section,
  Header as SiteHeader,
  LogoWrapper,
  Logo,
  Container,
} from './styles/header.style'

import { useSiteQuery } from '@/hooks/useSiteQuery'
import Navigation from './navigation'

const logo = require('../images/kylegillen.svg')

const Header = () => {
  const { title } = useSiteQuery()
  return (
    <SiteHeader>
      <Container>
        <Wrapper>
          <Section>
            <LogoWrapper>
              <Logo>
                <Link to="/">
                  <img src={logo} alt="Kyle Gillen" />
                </Link>
              </Logo>
            </LogoWrapper>
          </Section>
          {/* <Section>
            <Navigation />
          </Section> */}
        </Wrapper>
      </Container>
    </SiteHeader>
  )
}

export default Header
