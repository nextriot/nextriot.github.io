export interface PostContext {
  pageContext: {
    previous: SiblingContext
    next: SiblingContext
    slug: string
    dir: string
  }
}

interface SiblingContext {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}
