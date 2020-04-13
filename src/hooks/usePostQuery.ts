import { graphql, useStaticQuery } from 'gatsby'
import { PostQueryData } from '@/interfaces/PostQuery.interface'

export const usePostQuery = (slug: string) => {
  const data: PostQueryData = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          mdx: node {
            id
            excerpt(pruneLength: 160)
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            body
            fields {
              slug
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `)
  return match(data, slug)
}

const match = ({ allMdx }: PostQueryData, slug: string) => {
  const [match] = allMdx.edges.filter(({ mdx }) => {
    const postSlug = mdx.fields.slug
    return postSlug === slug
  })
  const { mdx } = match
  return { mdx }
}
