const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes
  projects.forEach((node, index) => {
    actions.createPage({
      path: "/portfolio/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.jsx"),
      context: {
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : projects[index - 1].frontmatter.slug,
        next:
          index === projects.length - 1
            ? null
            : projects[index + 1].frontmatter.slug,
      },
    })
  })
}
