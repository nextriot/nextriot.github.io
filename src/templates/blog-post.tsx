import React from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Image from 'gatsby-image'
import slugify from 'slugify'

import { usePostQuery } from '@/hooks/usePostQuery'
import { PostContext } from '@/interfaces/PostContext.interface'

import { Layout, Sidebar, Signup } from '@/components'

const image = require('../images/gatsby-astronaut.png')
const twitter = require('../images/twitter.svg')
const email = require('../images/mail.svg')

const renderFooterNavAlignment = (prev: object, next: object) => {
  if (prev && next) return 'space-between'
  if (prev && !next) return 'flex-start'
  if (!prev && next) return 'flex-end'
}

const BlogPostTemplate = ({ pageContext }: PostContext) => {
  const { previous, next, slug, dir } = pageContext
  const { mdx } = usePostQuery(slug)
  const { body } = mdx
  const { text: readingTime } = mdx.fields.readingTime
  // const { localFeaturedImage, remoteFeaturedImage } = mdx.fields
  const {
    title,
    date,
    category,
    spoiler,
    featuredImage,
    featuredImageAlt,
    attribute,
    attributeLink,
  } = mdx.frontmatter

  return (
    <Layout>
      <article className="article-container">
        <header className="article-header">
          <small>
            <Link to={`posts/${slugify(category, { lower: true })}`}>
              {category}
            </Link>
          </small>
          <h1>{title}</h1>
          <div className="article-meta">
            <p className="spoiler">{spoiler}</p>
            <b>{readingTime}</b>
            <time>{date}</time>
          </div>
        </header>
        <div className="article-wrapper">
          <div className="article-body">
            <figure
              itemProp="image"
              itemType="http://schema.org/ImageObject"
              itemScope
            >
              <Image
                sizes={{
                  ...featuredImage.childImageSharp.fluid,
                  aspectRatio: 16 / 9,
                }}
                alt={featuredImageAlt}
              />
              <figcaption>
                <span>
                  <a href={attributeLink} title={attribute}>
                    {attribute}
                  </a>
                </span>
              </figcaption>
            </figure>
            <section>
              <MDXRenderer>{body}</MDXRenderer>
            </section>
            <footer className="article-footer">
              <Signup />
              <address className="author">
                <figure>
                  <a href="">
                    <img src={image} alt="" />
                  </a>
                </figure>
                <div className="details">
                  <div className="bio">
                    <a href="">Kyle Gillen</a> is staff writer at
                    <em>The Atlantic</em> where he covers{' '}
                    <em>
                      <a href="">The perfect storyline</a>
                    </em>{' '}
                    families and education.
                  </div>
                  <div className="social">
                    <span>Connect</span>
                    <a href="">
                      <img src={twitter} alt="Reach me via twitter" />
                      <span>Twitter</span>
                    </a>
                    <a href="">
                      <img src={email} alt="Reach me via email" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </address>
              <nav
                style={{
                  justifyContent: renderFooterNavAlignment(previous, next),
                }}
              >
                {previous && (
                  <Link className="prev" to={`${dir}${previous.fields.slug}`}>
                    <span>Prev</span>
                    <em title={previous.frontmatter.title}>
                      {previous.frontmatter.title}
                    </em>
                  </Link>
                )}
                {next && (
                  <Link className="next" to={`${dir}${next.fields.slug}`}>
                    <em title={next.frontmatter.title}>
                      {next.frontmatter.title}
                    </em>
                    <span>Next</span>
                  </Link>
                )}
              </nav>
            </footer>
          </div>
          <Sidebar />
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate
