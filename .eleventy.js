module.exports = function (config) {

	// Debug JSON data

	config.addNunjucksFilter("JSONstringify", function (value) {
		return `<pre>${JSON.stringify(value, undefined, 2)}</pre>`;
	});

	config.addPassthroughCopy("assets");

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
		passthroughFileCopy: true
	};

};