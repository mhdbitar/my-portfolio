import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Image = ({ src, ...rest }) => {

  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `
  );

  const image = data.images.edges.find(image => image.node.relativePath === src)
  const ImageData = getImage(image.node)
  return <GatsbyImage image={ImageData} alt="" {...rest} />
}


export default Image;