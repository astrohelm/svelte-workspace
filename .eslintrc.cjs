module.exports = {
	root: true,
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	env: { browser: true, es2017: true, node: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
	parserOptions: { sourceType: 'module', ecmaVersion: 2023, extraFileExtensions: ['.svelte'] },
	overrides: [
		{ files: ['*.svelte'], parser: 'svelte-eslint-parser', parserOptions: { parser: '@typescript-eslint/parser' } }
	]
};
