import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage ,StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Scroll from '../components/scroll-top';
export default function projectDetails({ data, pageContext }) {
  const { next, prev } = pageContext
  const { markdownRemark: project } = data


  const headerImage = getImage(project.frontmatter.preview)
  const previewImage = getImage(project.frontmatter.fullPreview)

  return (
    <Layout>
      <Scroll showBelow={250} />
      <section className="dp container">
        <div className="dp--header">
          <div className="dp--header-content">
            <h1>{project.frontmatter.title}</h1>
            <p>{project.frontmatter.excerpt}</p>
          </div>
        </div>

        <div className="dp--content">
          <main className="dp--content--main">
            <GatsbyImage
              image={headerImage}
              className="dp--content--main--image"
              alt={project.frontmatter.title}
            />
            {project.frontmatter.brief && (
              <p className="dp--content--main--brief">
                {project.frontmatter.brief}
              </p>
            )}
          </main>
          <aside className="dp--content--aside">
            <div>
              <h3 className="dp--content--aside--title">Technical Sheet</h3>
              <ul className="dp--content--aside--tools">
                {project.frontmatter.tools &&
                  project.frontmatter.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
              </ul>
            </div>
            <div className="dp--content--aside--properties">
              <div>
                <h4>ORG</h4>
                {project.frontmatter.org}
              </div>

              {project.frontmatter.date && (
                <div>
                  <h4>YEAR</h4>
                  {new Date(project.frontmatter.date).getFullYear()}
                </div>
              )}

              <div>
                <h4>WWW</h4>
                {project.frontmatter.url && (
                  <a
                    href={project.frontmatter.url}
                    target="_blank"
                    rel="noreferrer"
                    className="dp--content--aside---link"
                  >
                     Visit site
                  </a>
                )}
                {!project.frontmatter.url && "Offline"}
              </div>
            </div>
          </aside>
        </div>
        {project.frontmatter.preview && (
          <div className="dp--full-preview">
            <figure className="browser dp--full-preview--browser">
              <div className="browser--actions">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser--inner">
                <GatsbyImage
                  image={previewImage}
                  alt={project.frontmatter.title}
                />
              </div>
            </figure>
          </div>
        )}
        <div className="dp--html">
          <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
        </div>

        <div className="dp--transition">
          {(prev || next) && <h2>See More Projects</h2>}
          <br />
          <div className="d-flex justify-center align-items-center">
            {prev && (
              <Link
                to={`/portfolio/${prev}`}
                className="btn dp--transition-link"
              >
                <span className="arrow-left">←</span> Previous
              </Link>
            )}

            <Link to="/portfolio" className="btn dp--transition-link--grid">
              <StaticImage
                src="../assets/images/icons/menu.png"
                layout="fixed"
                width={32}
                alt="menu"
              />
            </Link>

            {next && (
              <Link
                to={`/portfolio/${next}`}
                className="btn dp--transition-link"
              >
                next
                <span className="arrow-right">→</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query projectDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        featureImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
        excerpt
        tools
        url
        brief
        org
        preview {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 95)
          }
        }
        fullPreview {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 95)
          }
        }
      }
    }
  }
`
