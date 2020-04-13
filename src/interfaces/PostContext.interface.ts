export interface PostContext {
  pageContext: {
    previous: SiblingContext
    next: SiblingContext
    slug: string
    dir: string
  }
}

interface SiblingContext {
  fields: {
    slug: string
  }
}
