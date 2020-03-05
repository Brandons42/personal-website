const { imgs } = require('./img-data');

exports.createPages = ({ actions }) => {
	for (let q = 0; q < imgs.length; q++) {
		actions.createPage({
			component: require.resolve('./src/components/IMGDisplay.js'),
			context: { img: imgs[q] },
			path: `/images/${imgs[q].route}`
		});
	}
};