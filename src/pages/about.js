import * as React from "react"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout pageTitle={`About Page`}>
      <p>About page rendered using layout component</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About</title>
    <meta name="description" content="About Page" />
  </>
)

export default About