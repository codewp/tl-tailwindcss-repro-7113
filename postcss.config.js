const autoprefixer = require( 'autoprefixer' );
const tailwindcss = require( 'tailwindcss' );

module.exports = {
	plugins: [
		require( 'postcss-import' ),
		require( 'tailwindcss/nesting' ),
		tailwindcss,
		autoprefixer,
	],
};