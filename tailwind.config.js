module.exports = {
	// purge: {
	// 	content: [
	// 		'./dist/**/*.html',
	// 		'./src/**/*.js',
	// 		'./src/**/*.11ty.js',
	// 		'./src/**/*.njk',
	// 		'./src/**/*.md',
	// 		'./node_modules/dkb-ui/**/*.js',
	// 		'./node_modules/dkb-ui/**/*.njk'
	// 	],
	// },
	darkMode: false,
	theme: {
		fontFamily: {
			'sans': ['Salesforce Sans','ui-sans-serif', 'system-ui',"Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
			'avantgarde': ['AvantGarde-Demi',"Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
		},
		extend: {
			borderWidth: {
				'3': '3px',
			},
			colors: {
				red: {
					'95': '#FEF1EE',
					'60': '#FE5C4C'
				},
				cloudblue: {
					'60': '#0D9DDA'
				},
				teal: {
					'95': '#C7FFF2',
					'80': '#04E1CB'
				},
				blue: {
					'95': '#EEF4FF',
					'60': '#1B96FF',
					'50': '#0176D3',
					'30': '#014486',
					'20': '#032E61',
					'10': '#001639',
					lightest: "#D8E6FE",
					light: "#00a1df",
					mid: "#0176D3",
					dark: "#032D60"
				},
				green: {
					'95': '#DCFDD0',
					'60': '#3BA755'
				},
				violet: {
					dark: "#2E0039"
				}
			},
			fontSize: {
				'80': '5rem',
				'52': '3.25rem',
				'22': '1.375rem',
				'15': '0.9375rem'
			},
			lineHeight: {
				'80': '1.1',
				'52': '1.155',
				'28': '1.167',
				'22': '1.365',
				'18': '1.335'
			},
			letterSpacing: {
				'18': '-0.018em',
				'22': '-0.0225em',
				'15': '-0.002em'
			},
			padding: {
				'a': '0.8125rem',
				'b': '0.625rem'
			}
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}