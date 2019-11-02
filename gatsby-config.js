module.exports = {
    siteMetadata: {
        title: `Andrew Noyes`,
        siteUrl: `https://noyes.io`,
        siteRepo: "https://github.com/andrewnoyes/blog",
        description: `Notes on software development and whatever else is on my mind`,
        author: `@andrewnoyes`,
        publisher: `Andrew Noyes`,
        // icon: "src/assets/favicon.ico",
        keywords: ["software", "development", "blog", "noyes", "engineering"],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
