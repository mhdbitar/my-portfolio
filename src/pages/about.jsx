import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Progress from '../components/progress'
import { graphql } from "gatsby"
const About = ({data}) => {

  const skills = [
    ["Swift", 100],
    ["Git", 100],
    ["REST APIs", 100],
    ["Agile scrum", 100],
    ["OOP", 90],
    ["Design Pattern", 80],
    ["TDD Test", 80],
    ["Javascript", 80],
    ["Python Flask", 60],
    ["SwiftUI", 40]
  ]

  return (
    <Layout>
      <Seo title="About" />
      <div className="container about-page grid">
        <div className="about-page-wrapper ">
          <h1 className="about-page--title">Who I Am</h1>
          <div className="about-page--info ">
            <p>
              Enthusiastic iOS Engineer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. A clear understanding of the iOS ecosystem and Mobile development and training in Software engineering. Motivated to learn, grow and excel in the Software industry.
            </p>
            <br />

            <p>
              My primary area of experience is in iOS development, but in general, I've worked on web development for about one year and built some web apps, 
              I am interested in
                <strong className="text-darken"> Python</strong> , along with
                <strong className="text-darken"> AWS</strong> too.
            </p>
            <br />
            <p>
              I can quickly and efficiently join your team using
              <strong className="text-darken"> CIDI</strong> and <strong className="text-darken">Agile</strong> methodology.
            </p>
          </div>
          <br />
          <br />
          <h2 className="about-page--subtitle">My skills</h2>
          <div className="about-page--info ">
            <p>
              My main programming language is Swift and SwiftUI, so I used swift to produce robust apps that provide the end-users the best and most appropriate experience suited to their devices.
            </p>
            <br />

            {skills.map(([skill, percentage], index) => (
              <Progress skill={skill} percentage={percentage} key={index} />
            ))}
            <br />
            <p>
              This is a list of my foundational Engineering and development skills.
              I'm also familiar with many tools and frameworks that fall under
              these main categories, like{" "}
              <strong className="text-darken">Firbase</strong> ,
              <strong className="text-darken">OneSignal</strong> ,{" "}
              <strong className="text-darken">In-app purchase</strong> ,
              <strong className="text-darken">Animation</strong> and{" "}
              <strong className="text-darken">CoreMl</strong>
            </p>
            <br />
            <p>
              download my{" "}
              <a
                rel="noreferrer"
                href={data.file.publicURL}
                target="_blank"
                className="btn btn-primary"
              >
                resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  {
    file(extension: { eq: "pdf" }) {
      publicURL
    }
  }
`
export default About
