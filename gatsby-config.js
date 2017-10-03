module.exports = {
  plugins: [
    {
      options: {
        throw: true
      },
      resolve: 'gatsby-plugin-react-a11y'
    },
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: `_posts`,
        path: `${__dirname}/_posts/`
      },
      resolve: `gatsby-source-filesystem`
    },
    `gatsby-transformer-remark`
  ]
}
