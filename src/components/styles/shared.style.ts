import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`sm:mx-auto max-w-screen-xl flex flex-col justify-center align-middle xl:w-full`};
  /* @media (min-width: 675px) {
    width: calc(100% - 32px);
  } */
`

export { Container }
