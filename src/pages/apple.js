import React from "react"
import {
    Link,
    graphql,
} from 'gatsby';


import Layout from './../components/layout';

const Apple = ( {data} ) => {
    return (
        <div>
          <Layout>
          <h1 className="title">{data.site.siteMetadata.title}</h1>
          <h2 className="sub-title">This is Apple</h2>
          </Layout>
        </div>
    );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        user {
            name
            email
        }
      }
    }
  }
`

export default Apple;
