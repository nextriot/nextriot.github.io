import styled from 'styled-components'
import tw from 'twin.macro'

const Sidebar = styled.aside`
  ${tw`flex-1 hidden lg:flex`}
  min-width: 300px;
`
const Wrapper = styled.section`
  ${tw`opacity-0 transition-opacity duration-500 w-full lg:opacity-100`};
  will-change: transform;
`

export { Sidebar, Wrapper }
