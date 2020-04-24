const { resolve } = require('path')
const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = resolve(`./src/templates/blog-post.tsx`)
  const { data } = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              readingTime {
                minutes
                text
              }
            }
            frontmatter {
              title
            }
            body
          }
        }
      }
    }
  `).catch((error) => console.log(error))

  const posts = data.allMdx.edges

  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const dir = `/posts`

    createPage({
      path: `${dir}${node.fields.slug}`,
      component: blogPost,
      context: {
        slug: node.fields.slug,
        dir,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  getNode,
  createNodeId,
}) => {
  const { createNodeField, createNode } = actions
  // Add slug field to frontmatter
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
