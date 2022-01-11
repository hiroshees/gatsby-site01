import React from "react"
import {
    Link,
    graphql,
} from 'gatsby';

import Layout from './../components/layout';

const Orange = ({data}) => {
  console.log(data);
    return (
      <div>
        <Layout>
        <h1>This is Orange</h1>
        </Layout>
      </div>
    );
};


export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        relativePath
        size
        name
        extension
        ctime
      }
    }
  }
`

export default Orange;
