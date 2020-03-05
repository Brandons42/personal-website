require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
	siteMetadata: {
		title: `Brandon Suen's Personal Website`,
		description: `The personal website of Brandon Suen.`,
		author: `Brandon Suen`,
		siteUrl: `https://bsuen.netlify.com/`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-favicon`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: { defaultQuality: 80 }
		},
		/*{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Brandon Suen's Personal Website`,
				short_name: `B. Suen`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#26377c`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`
			}
		},*/
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: { trackingId: process.env.GA_TRACKING_ID }
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
