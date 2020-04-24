import { FluidObject } from 'gatsby-image'

export interface PostQueryData {
  allMdx: {
    edges: Mdx[]
  }
}

interface RemarkImage {
  childImageSharp: {
    fluid: FluidObject
  }
}

interface Mdx {
  mdx: {
    id: string
    excerpt: string
    frontmatter: {
      title: string
      date: string
      category: string
      spoiler: string
      featuredImage: RemarkImage
      featuredImageAlt: string
      attribute: string
      attributeLink: string
    }
    body: string
    fields: {
      slug: string
      readingTime: {
        text: string
        minutes: number
      }
    }
  }
}
