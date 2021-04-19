// @ts-check

const { sample } = require("@jonahsnider/util");

const boolean = [false, true];

/** @type {import('prettier').Options} */
module.exports = {
	printWidth: sample([80, 100, 120, 140, 160]),
	tabWidth: sample([2, 4, 6, 8]),
	useTabs: sample(boolean),
	semi: sample(boolean),
	singleQuote: sample(boolean),
	quoteProps: sample(["as-needed", "consistent", "preserve"]),
	jsxSingleQuote: sample(boolean),
	trailingComma: sample(["es5", "none", "all"]),
	bracketSpacing: sample(boolean),
	jsxBracketSameLine: sample(boolean),
	arrowParens: sample(["avoid", "always"]),
	insertPragma: sample(boolean),
	proseWrap: sample(["always", "never", "preserve"]),
	htmlWhitespaceSensitivity: sample(["css", "strict", "ignore"]),
	vueIndentScriptAndStyle: sample(boolean),
	endOfLine: sample(["lf", "crlf", "cr"]),
};
