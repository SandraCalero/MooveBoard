const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		colors: {
			white: '#ffffff',
			yellow: '#ffe57f',
			pink: '#f16c7f',
			blue: '#0b5ed7',
			transparent: '#00000000',
			grey: '#c4c4c4',
			'mine-shaft': {
				DEFAULT: '#373737',
				50: '#939393',
				100: '#898989',
				200: '#747474',
				300: '#606060',
				400: '#4B4B4B',
				500: '#373737',
				600: '#1B1B1B',
				700: '#000000',
				800: '#000000',
				900: '#000000',
			},
			'cerulean': {
				DEFAULT: '#0BAEBD',
				100: '#74ECF7',
				200: '#4EE7F5',
				50: '#88EFF8',
				300: '#27E1F2',
				400: '#0DD1E4',
				500: '#00ADC1',
				600: '#087D88',
				700: '#054C53',
				800: '#021C1E',
				900: '#000000'},
		},
		gridTemplateColumns: {
			auto: 'repeat(auto-fill, minmax(13rem, 1fr))'
		}
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.3xl') },
				h2: { fontSize: theme('fontSize.2xl') },
				h3: { fontSize: theme('fontSize.xl') },
			});
		}),
	],
};
