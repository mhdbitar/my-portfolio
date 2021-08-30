import React from "react"
//import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
const Footer = () => {
  const {
    site: {
      siteMetadata: { author, menuLinks, socialLinks, siteTitle },
    },
  } = useStaticQuery(graphql`
    query footer {
      site {
        siteMetadata {
          socialLinks {
            url
            label
          }
          author
          siteTitle
          menuLinks {
            label
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <footer className="mainFooter container">
        <div>
          <ul className="list-style-none">
            {menuLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className="type-2 mainFooter--link ">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="list-style-none">
            {socialLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  className="type-2 mainFooter--link"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <nav>
            <a
              href={`https://twitter.com/${author}`}
              target="_blank"
              rel="noreferrer"
              title="Connect with me on Twitter"
              className="type-2 mainFooter--twitter"
            >
              {author}
            </a>
          </nav>
        </div>
      </footer>
      <div className="container d-flex justify-center">
        Copyright © {siteTitle}  {new Date().getFullYear()}
      </div>
    </>
  )
}

//Footer.propTypes = {}

export default Footer
/*


*/
