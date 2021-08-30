import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = ({ data }) => {



  const {
    projects: { nodes: projects },
  } = data
  console.log(projects)
  return (
    <Layout>
      <Seo title="Mohamad Bitar" />
      <div className="homePage container">
        <Hero />
        <div className="homePage--gallery">
          {projects &&
            projects.map((project, index) => {
              const image = getImage(project.frontmatter.featureImage)

              //const img = project.frontmatter.featureImage.childImageSharp.fluid
              return (
                <Link
                  key={index}
                  to={`/portfolio/${project.frontmatter.slug}`}
                  className={`homePage--gallery--item ${project.frontmatter.css} `}
                >
                  <GatsbyImage
                    image={image}
                    alt=""
                    formats={["auto", "webp"]}
                    className="homePage--gallery--item-image"
                  />

                  {/* <picture>
                    <source
                      type="image/webp"
                      srcset={img.srcWebp}
                      sizes="100vw"
                    />
                    <img
                      formats="auto,webp"
                      decoding="async"
                      src={img.src}
                      srcset={img.srcSet}
                      alt=""
                    />
                  </picture> */}

                  <div className="homePage--gallery--item--title">
                    <span>{project.frontmatter.title}</span>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query homePage {
    projects: allMarkdownRemark(
      sort: { order: [ASC], fields: [frontmatter___title] }
      limit: 6
      filter: { frontmatter: { featured: { eq: false } } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          featureImage {
            childImageSharp {
              fluid {
                src
                srcWebp
                srcSet
              }
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          css
        }
        id
      }
    }
  }
`
export default IndexPage

/*

<StaticImage
      src="../assets/images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {[1, 2, 3, 4].map((_, index) => (
      <Link to="/project/" key={index} state={{ slug: index }}>
        Go to {index}
      </Link>
    ))}
    <p>
      <Link to="/project/">Go to page 2</Link> <br />
      <Link to="/projects/">Go to page 2</Link> <br />
    </p>
    */
