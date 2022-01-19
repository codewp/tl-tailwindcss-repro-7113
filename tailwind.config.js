const colors = require( 'tailwindcss/colors' );

module.exports = {
	important: '.asnp-app',
	prefix: 'asnp-',
	content: [
		'./assets/js/dev/**/*.{js,jsx,ts,tsx,vue,html}',
		'./assets/js/dev/**/*.jsx',
	],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			gray: colors.gray,
			rose: colors.rose,
			indigo: colors.indigo,
			green: colors.green,
			blue: colors.blue,
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
