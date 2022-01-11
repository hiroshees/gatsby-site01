module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "はじめてのGatsby Site",
    author: "hazelnut_latte",
    category: ["Laravel", "Vue.js", "React"],
    user: { name: "Huff Wisteria", email: "john@example.com" },
  },

  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
