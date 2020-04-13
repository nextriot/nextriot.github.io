export interface PostQueryData {
  allMdx: {
    edges: Mdx[]
  }
}

interface Mdx {
  mdx: {
    id: string
    excerpt: string
    frontmatter: {
      title: string
      date: string
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
