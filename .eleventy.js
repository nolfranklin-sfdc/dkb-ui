module.exports = function (config) {

	return {
		dir: {
			input: 'src/site/content/',
			output: 'dist',
			data: '../_data',
			includes: '../_includes',
		},
		templateFormats: ['njk', 'md'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		// Because eleventy's passthroughFileCopy does not work with permalinks
		// we need to manually copy assets ourselves using gulp.
		// https://github.com/11ty/eleventy/issues/379
		passthroughFileCopy: false,
	};

};