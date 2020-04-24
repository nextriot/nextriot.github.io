import React from 'react'

import {
  Container,
  Lead,
  Form,
  Title,
  BodyText,
  Input,
  Submit,
} from './styles/signup.style'

function Signup() {
  return (
    <Container>
      <Lead>
        <Title>Receive updates &amp; content</Title>
        <BodyText>
          I won&apos;t bombard your inbox, and I promise no spam. Ever. Spam is
          for Hawaiians. I&apos;m not Hawaiian.
        </BodyText>
      </Lead>
      <Form action="/">
        <Input type="email" placeholder="Your email address" />
        <Submit type="submit" value="Submit" />
      </Form>
    </Container>
  )
}

export default Signup
