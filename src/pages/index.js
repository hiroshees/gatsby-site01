import * as React from "react"
import { 
  Link,
  graphql,
} from "gatsby"

import Layout from './../components/layout';

const BlogPage = ({data}) => {
  return (
    <div>
      <Layout>
      <h1 className="title">{data.site.siteMetadata.title}</h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    nodes {
      id
      html
      timeToRead
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
    }
  }
}
`

export default BlogPage;
