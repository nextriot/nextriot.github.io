import styled from 'styled-components'
import { Link as GLink } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`
const Header1 = styled.h1`
  ${scale(0.75)}
  margin-bottom: 0;
  margin-top: 0;
  white-space: nowrap;
`
const Header3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 2.625rem;
  height: 42;
`
const Link = styled(GLink)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

export { Wrapper, Header, Header1, Header3, Link }
