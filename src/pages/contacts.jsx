import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
const Contacts = ({
  data: {
    site: { siteMetadata: contact },
  },
}) => {

  return (
    <Layout>
      <Seo title="contacts us" />
      <div className="container contact-page">
        <h1>Get in Touch</h1>
        <p className="subtitle">
          Send a general message or details of a project you'd like me to be a
          part of and I'll get back to you as soon as possible.
        </p>

        <ul className="list-style-none contact-page--links">
          <li>
            <a href={`mailto:${contact.email}?Subject=Visitor Message`}>
              {contact.email}
            </a>
          </li>
          <li>
            <a href={`tel:${contact.phone}`} target="_blank" rel="noreferrer">
              {contact.phone}
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query contact {
    site {
      siteMetadata {
        author
        email
        phone
      }
    }
  }
`
export default Contacts
