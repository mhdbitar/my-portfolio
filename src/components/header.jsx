import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useWindowSize from "../hooks/window-size"
import { breakpoint } from "../data/constance"
import MenuIcon from "../assets/images/icons/menu.inline.svg"
const Header = ({ drawer }) => {
  let [width] = useWindowSize()
  const {
    site: { siteMetadata: siteData },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
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
    <header className="mainHeader container">
      <div className="grid">
        <div className="mainHeader--logo ">
          <Link
            to="/"
            className="d-flex align-items-center mainHeader--logo--link"
          >
            <StaticImage
              src="../assets/images/icon.png"
              width={55}
              layout="fixed"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="bitar logo"
            />
            <strong className="d-inline text-dark">{siteData.siteTitle}</strong>
          </Link>
        </div>
        {width > breakpoint ? (
          <div className="mainHeader--nav d-flex justify-flex-end">
            <nav className="mainNavigation d-flex align-items-center">
              {siteData.menuLinks.map((link, index) => (
                <Link
                  to={link.url}
                  key={index}
                  className="mainNavigation--link"
                  activeClassName="active"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : (
          <button
            onClick={event => drawer()}
            className="btn mainHeader--button no-border"
          >
            <img src={MenuIcon}  width="30" height="30" alt="menu icon"/>
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
