import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle={`Home Page`}>
      <p>Home Page</p>
      <StaticImage
        alt="pitbull"
        src="https://images.unsplash.com/photo-1695753579372-498a4a382ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      />
    </Layout>
  )
}

export const Head = () => <Seo title={`Home Page`} />

export default IndexPage
