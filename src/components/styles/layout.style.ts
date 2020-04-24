import styled from 'styled-components'
import tw from 'twin.macro'
import { Container as SharedContainer } from './shared.style'

const Main = styled.main`
  padding: 0 0.616rem;
  @media (min-width: 640px) {
    padding: 0 2.4rem;
  }
  @media (min-width: 768px) {
    padding: 0;
  }
`

const Container = styled(SharedContainer)`
  ${tw`max-w-screen-sm lg:max-w-screen-xl m-0`};
  @media (min-width: 1024px) {
    padding: 0 2.4rem;
  }
`
const Wrapper = styled.div`
  ${tw`w-full flex justify-start my-2 sm:max-w-screen-sm sm:p-0 lg:max-w-screen-lg mx-auto`}
  padding: 0.616rem;
`

export { Main, Wrapper, Container }
