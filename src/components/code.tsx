import React from 'react'
import { LiveProvider, LivePreview } from 'react-live'

const KEYWORD = 'react-live'

const renderLiveCode = ({ children }: Props) => {
  const codeString = (children as string).trim()
  return (
    <LiveProvider code={codeString}>
      <LivePreview />
    </LiveProvider>
  )
}

interface Props {
  className: string
  children: string | object[]
}

const Code = (props: Props) => {
  const { className } = props
  const isLive = className.indexOf(KEYWORD) !== -1

  return isLive ? renderLiveCode(props) : <pre {...props} />
}

export default Code
