const path = require('path')

const extensionsForPrettify = [
	'editorconfig',
	'eslintrc',
	'prettierignore',
	'prettierrc',
	'stylelintrc',
	'json',
	'md',
]

const otherFiles = `**/*.(${extensionsForPrettify.join('|')})`

module.exports = {
	'*': [() => 'pnpm lint:editorconfig'],

	'**/*.(ts|tsx)': () => 'pnpm lint:ts',

	'**/*.(ts|tsx|js)': (filenames) => [
		`pnpm lint:eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
		`pnpm lint:prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
	],

	'**/*.pcss': (filenames) => [
		`pnpm lint:stylelint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
		`pnpm lint:prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
	],

	[otherFiles]: (filenames) => [
		`pnpm lint:prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
	],
}
