module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/airbnb'],

	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		quotes: ['error', 'single'],
		'default-case': 0,
		'comma-dangle': ['error', 'never'],
		'max-len': ['error', { code: 140 }],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-param-reassign': 0,
		'linebreak-style': ['error', 'windows'],
		'lines-between-class-members': 0
	},

	parserOptions: {
		parser: 'babel-eslint'
	}
};
