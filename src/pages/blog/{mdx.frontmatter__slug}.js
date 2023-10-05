import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={`Cool Blogs!!!`}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`

export const Head = () => <Seo title={`Cool posts!`} />

export default BlogPost
