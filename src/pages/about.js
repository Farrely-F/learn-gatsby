import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout pageTitle={`About Page`}>
      <p>About page rendered using layout component</p>
      <StaticImage alt="a photo of lake" src="../images/lake.jpg" />
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title={`About Page`} />
    <meta name="description" content="About Page" />
  </>
)

export default About
