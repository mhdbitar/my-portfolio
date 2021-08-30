import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Image from './image';
const Drawer = ({ opened, close }) => {
  const {
    site: { siteMetadata: siteData },
  } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          socialLinks {
            url
            label
            icon
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
    <div className={`drawer  ${opened ? "opened" : null}`}>
      <div className="drawer--container">
        <div className="drawer--social">
          <ul className="list-style-none drawer--social-list">
            <li>
              <a
                href={`https://twitter.com/${siteData.author}`}
                target="_blank"
                rel="noreferrer"
                title="Connect with me on Twitter"
                className="drawer--social-list--link"
              >
                <StaticImage
                  src="../assets/images/icons/twitter.png"
                  width={24}
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="close drawer"
                />
              </a>
            </li>
            {siteData.socialLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  className="drawer--social-list--link"
                  rel="noreferrer"
                >
                  <Image src={item.icon} />
                </a>
              </li>
            ))}
          </ul>
          <button className="btn no-border" onClick={e => close(false)}>
            <StaticImage
              src="../assets/images/icons/delete.png"
              width={24}
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="close drawer"
            />
          </button>
        </div>

        <ul className="list-style-none drawer--list ">
          <li>
            <Link to="/" className="type-2 drawer--list--link ">
              home
            </Link>
          </li>
          {siteData.menuLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className="type-2 drawer--list--link ">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-hidden="true"
        className="drawer--overlay"
        onClick={e => close(false)}
      ></div>
    </div>
  )
}

Drawer.propTypes = {
  close: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
}

export default Drawer
