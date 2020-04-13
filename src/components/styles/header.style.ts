import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled.div`
  ${tw`w-full flex justify-between align-middle` as any}
`
const Section = styled.div`
  ${tw`w-1/4` as any}
`

export { Wrapper, Section }
