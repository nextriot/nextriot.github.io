import React from 'react'
import { Link } from 'gatsby'

import { Wrapper } from '@/components/styles/layout.style'
import { Layout, SEO, Image } from '@/components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <h1>Index Page</h1>
    </Wrapper>
  </Layout>
)

export default IndexPage
