import styled from 'styled-components'
import tw from 'twin.macro'
import { Container as SharedContainer } from './shared.style'

const Header = styled.header`
  border-bottom: 1px solid #9b9b9b;
  color: var(--textColor);
  padding: 0 0.616rem;
  min-height: 60px;
  margin-bottom: 20px;
  @media (min-width: 640px) {
    margin-bottom: 0;
    padding: 0 2.4rem;
  }
  @media (min-width: 768px) {
    padding: 0;
  }
`
const Container = styled(SharedContainer)`
  ${tw`max-w-screen-sm lg:max-w-screen-xl`};
  @media (min-width: 1024px) {
    padding: 0 2.4rem;
  }
`
const Wrapper = styled.div`
  ${tw`w-full flex justify-center sm:justify-between align-middle my-2 max-w-screen-lg mx-auto`}
`
const Section = styled.div`
  ${tw`w-1/2 flex justify-center sm:justify-start`}
`
const NavSection = styled(Section)``

const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  background-color: var(--white);
  padding: 10px 20px;
  @media (min-width: 640px) {
    padding: 0px 20px;
    top: 11px;
    left: -20px;
    position: relative;
  }
`
const Logo = styled.div`
  height: 44px;
  width: 44px;
  filter: invert(14%) sepia(70%) saturate(5410%) hue-rotate(345deg)
    brightness(98%) contrast(94%);
  @media (min-width: 640px) {
    width: 40px;
    height: 40px;
  }
`

export { Wrapper, Section, Header, LogoWrapper, Logo, Container, NavSection }
