import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const ProjectsPage = ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data
  console.log(data)
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className="container portfolio-page">
        <div className="portfolio-page--header">
          <h1 className="portfolio-page--header--title">
            Web Development Portfolio
          </h1>
          <p className="portfolio-page--header--excerpt">
            Online success comes with a site that can load quickly, offers easy
            navigation, and is built according to best practices and a sense of
            design.
          </p>
        </div>
        <div className="portfolio-page--gallery">
          {projects.map(({ frontmatter: project }, index) => {
            console.log(project)
            const image = getImage(project.thumb)
            return (
              <a
                key={index}
                rel="noreferrer"
                href={project.url}
                target="_blank"
                className="portfolio-page--gallery--item"
              >
                <GatsbyImage image={image} alt={project.title} />
                <div className="portfolio-page--gallery--item--title">
                  <span>{project.title}</span>
                  <p>{project.stack}</p>
                </div>
              </a>
              // <Link
              //   key={index}
              //   to={`/portfolio/${project.slug}`}
              //   className="portfolio-page--gallery--item"
              // >
              //   <GatsbyImage image={image} alt={project.title} />
              //   <div className="portfolio-page--gallery--item--title">
              //     <span>{project.title}</span>
              //     <p>{project.stack}</p>
              //   </div>
              // </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          excerpt
          url
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contacts: site {
      siteMetadata {
        email
      }
    }
  }
`
export default ProjectsPage
