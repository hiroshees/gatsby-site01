import React from "react";
import {
    Link,
    graphql,
} from 'gatsby';

import Layout from './../components/layout';

const AboutPage = ( {data} ) => {
    return (
        <div>
            <Layout>
            <h1 className="title">{data.site.siteMetadata.title}</h1>
            <h2 className="sub-title">This is about</h2>
            <ul>
                <li>name:{data.site.siteMetadata.user.name}</li>
                <li>email:{data.site.siteMetadata.user.email}</li>
            </ul>
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

export default AboutPage;
