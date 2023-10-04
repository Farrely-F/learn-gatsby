import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={`Blog Posts Page`}>
      <p>This section will be a blog post</p>
      <h2>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </h2>
    </Layout>
  )
}

export const Head = () => <Seo title={`My Blog Posts`} />

export const query = graphql`
  query getAllBlog {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
