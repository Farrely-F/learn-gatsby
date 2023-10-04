import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query siteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  )
}

export default Seo
