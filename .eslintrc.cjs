module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		extraFileExtensions: ['.svelte']
	},
	plugins: ['import'],
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:svelte/prettier',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended'
	],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	settings: {
		'import/resolver': {
			typescript: {
				project: ['./tsconfig.json', './.svelte-kit/tsconfig.json']
			}
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
			'svelte-eslint-parser': ['.svelte']
		}
	},
	ignorePatterns: ['*.cjs'],
	rules: {
		'prettier/prettier': [
			'warn',
			{},
			{
				usePrettierrc: true
			}
		],
		'import/no-unresolved': 'error',
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		]
	}
};