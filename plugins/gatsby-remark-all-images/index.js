const visit = require('unist-util-visit')

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, 'export', ({ value }) => {
    // console.log(value)
  })
  return markdownAST
}
