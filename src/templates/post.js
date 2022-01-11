import React from "react";
import {
    graphql,
} from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/layout";

export default function Post( {data} ) {
  return (
    <Layout>
        <Img
            fixed={data.markdownRemark.frontmatter.topImage.childImageSharp.fixed}
        />
        <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
        <h2 className="sub-title">{data.markdownRemark.frontmatter.hoge}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        hoge
        topImage {
          childImageSharp {
            fixed(width: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
