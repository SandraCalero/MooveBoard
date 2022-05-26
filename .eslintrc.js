module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'airbnb',

		'prettier',
		'eslint-config-prettier',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
