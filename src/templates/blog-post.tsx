import React from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { usePostQuery } from '@/hooks/usePostQuery'
import { PostContext } from '@/interfaces/PostContext.interface'

import { Layout } from '@/components'

const BlogPostTemplate = ({ pageContext }: PostContext) => {
  const { previous, next, slug, dir } = pageContext
  const { mdx } = usePostQuery(slug)
  const { title, date } = mdx.frontmatter
  const { text } = mdx.fields.readingTime
  const { body } = mdx
  return (
    <Layout>
      <h1>{title}</h1>
      <em>{`${date} • ${text}`}</em>
      <MDXRenderer>{body}</MDXRenderer>
      {previous && <Link to={`${dir}${previous.fields.slug}`}>Prev</Link>}
      {next && <Link to={`${dir}${next.fields.slug}`}>Next</Link>}
    </Layout>
  )
}

export default BlogPostTemplate
