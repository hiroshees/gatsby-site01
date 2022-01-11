import React from 'react'

import {
    Link,
    graphql,
    useStaticQuery,
} from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
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
    `);

    return (
        <footer>
            <ul>
                <li>name:{data.site.siteMetadata.user.name}</li>
                <li>email:{data.site.siteMetadata.user.email}</li>
            </ul>
            <div>© Gatsby Blog Site { (new Date()).getFullYear() }</div>
        </footer>
    )
}

export { Footer }
