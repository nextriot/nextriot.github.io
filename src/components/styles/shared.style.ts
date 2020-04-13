import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`mx-auto max-w-screen-xl xl:w-full flex justify-center align-middle` as any}
  width: calc(100% - 32px);
`

export { Container }
