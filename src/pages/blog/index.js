import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle={`Blog Posts Page`}>
      <p>Latest blogs:</p>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>Posted on: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title={`My Blog Posts`} />

export const query = graphql`
  query getAllBlog {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`

export default BlogPage
